using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api.Models
{
    public class Stock
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string Symbol { get; set; } = string.Empty;

        [BsonElement("Name")]
        public string CompanyName {get;set;} = string.Empty;

        public decimal Purchase {get;set;}

        public decimal LastDiv {get;set;}

        public string Industry {get;set;} = string.Empty;

        public long MarketCap {get;set;}

        public List<Comment> Comments {get;set;} = new List<Comment>();
    }
}