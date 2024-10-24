using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.DTOs.Stock;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace api.Controllers
{
    [Route("api/stock")]
    [ApiController]
    public class StockController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly IStockRepository _stockRepo;
        public StockController(ApplicationDBContext context, IStockRepository stockRepo)
        
        {
            _stockRepo = stockRepo;
            _context = context;
        }

        // list all row of stocks table
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAll([FromQuery] QueryObject query )
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
                
            var stocks = await _stockRepo.GetAllAsync(query);
            var stockDTO = stocks.Select(s=>s.ToStockDTO()).ToList();
            return Ok(stocks);
        }


        //
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {   if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var stock = await _stockRepo.GetByIdAsync(id);
            
            if(stock == null)
                return NotFound();
            return Ok(stock.ToStockDTO());
        }

        // create a stock
        [HttpPost]
        public async Task<IActionResult>  Create([FromBody] CreateStockRequestDTO stockDTO)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var stockModel = stockDTO.ToStockFromCreateDTO();
            await _stockRepo.CreateAsync(stockModel);
            return CreatedAtAction(nameof(GetById), new {id=stockModel.Id}, stockModel.ToStockDTO());
        }


        // update a stock
        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateStockRequestDTO updateDTO)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var stockModel = await _stockRepo.UpdateAsync(id, updateDTO);
            
            if(stockModel ==  null)
                return NotFound();
            
            return Ok(stockModel.ToStockDTO());
        }

        // delete a stock
        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var stockModel = await _stockRepo.DeleteAsync(id);

            if(stockModel == null)
                return NotFound();

            return NoContent();
        }
    }
}