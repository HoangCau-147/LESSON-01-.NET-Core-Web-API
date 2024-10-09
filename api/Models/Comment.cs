using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api.Models;

public class Comment
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    
    public string Title { get; set; } = null!;

    public string Content { get; set; } = null!;

    public DateTime CreateOn { get; set; } = DateTime.Now;

    public int? StockId { get; set; }

    public Stock? Stock { get; set; }
}
