using api.Models; // Để sử dụng MongoDbSettings
using api.Data;   // Để sử dụng MongoDBContext
using Microsoft.Extensions.Options; // Để sử dụng IOptions

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// database
// Đọc cấu hình MongoDB từ appsettings.json
builder.Services.Configure<Database>(
    builder.Configuration.GetSection("Database"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.Run();