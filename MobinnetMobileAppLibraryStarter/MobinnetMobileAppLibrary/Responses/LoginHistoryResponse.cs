using System.Collections.Generic;
using MobinnetMobileAppLibrary.Helper;

namespace MobinnetMobileAppLibrary.Responses
{
    public class LoginHistoryResponse : DtoResponse
    {
        public LoginHistoryResponse()
        {
            Items = new List<LoginHistoryItem>();
        }

        public List<LoginHistoryItem> Items { get; set; }
    }

    public class LoginHistoryItem
    {
        public string DayName { get; set; }

        public string Date { get; set; }

        public string Time { get; set; }

        public string Ip { get; set; }

        public string Status { get; set; }
    }
}
