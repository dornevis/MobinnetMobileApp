using System.Collections.Generic;
using RestSharp;

namespace MobinnetMobileAppLibrary.Helper
{
    internal class Auth
    {
        public string RequestVerificationToken { get; set; }

        public List<RestResponseCookie> Cookies { get; set; }
    }
}
