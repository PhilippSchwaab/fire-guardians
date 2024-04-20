using Lib.Net.Http.WebPush;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace FireGuardians.Models;

internal class PushNotification
{
    public class NotificationAction
    {
        public string Action { get; }
        public string Title { get; }

        public NotificationAction(string action, string title)
        {
            Action = action;
            Title = title;
        }
    }

    public string Title { get; set; } = null!;
    public string Body { get; set; } = null!;
    public string Icon { get; set; } = null!;
    public IList<int> Vibrate { get; set; } = new  List<int>();
    public IDictionary<string, object> Data { get; set; } = null!;
    public IList<NotificationAction> Actions { get; set; } = new  List<NotificationAction>();
    
    private const string WRAPPER_START = "{\"notification\":";
    private const string WRAPPER_END = "}";
    private static readonly JsonSerializerSettings _jsonSerializerSettings = new()
    {
        ContractResolver = new  CamelCasePropertyNamesContractResolver()
    };
    
    public PushMessage ToPushMessage(string? topic = null, int? timeToLive = null, PushMessageUrgency urgency = PushMessageUrgency.Normal)
    {
        return new PushMessage(WRAPPER_START + JsonConvert.SerializeObject(this, _jsonSerializerSettings) + WRAPPER_END)
        {
            Topic = topic,
            TimeToLive = timeToLive,
            Urgency = urgency
        };
    }
}