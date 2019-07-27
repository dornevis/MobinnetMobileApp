using System.Collections.Generic;
using DNTPersianUtils.Core;
using HtmlAgilityPack;
using RestSharp;

namespace MobinnetMobileAppLibrary.Helper
{
    internal static class ObjectExtensions
    {
        public static void AddCookies(this RestRequest request, IList<RestResponseCookie> cookies)
        {
            foreach (var cookie in cookies)
            {
                request.AddCookie(cookie.Name, cookie.Value);
            }
        }

        public static string GetElementInnerValue(this HtmlNode htmlNode, string xPath)
        {
            return htmlNode.SelectSingleNode(xPath).InnerText.ApplyCorrectYeKe().DecodeTrim();
        }

        public static void AddRequestVerificationToken(this RestRequest request, string token)
        {
            request.AddHeader("RequestVerificationToken", token);
        }

        public static void AddCookieHeader(this RestRequest request, string mobinEcareAntiforgery)
        {
            request.AddHeader("Cookie", "_ga=GA1.2.210490029.1549700564; __utma=151892005.210490029.1549700564.1559823411.1559823411.1; __utmz=151892005.1559823411.1.1.utmcsr=mobinnet.ir^|utmccn=(referral)^|utmcmd=referral^|utmcct=/speed-test; SERVERID=MY2; Mobin.eCare.Antiforgery=" + mobinEcareAntiforgery);
        }

        public static void AddRestRequestParameters(this RestRequest request, params Header[] headers)
        {
            foreach (var header in headers)
            {
                switch (header)
                {
                    case Header.ContentTypeJson:
                        request.AddHeader("Content-Type", "application/json; charset=UTF-8");
                        break;
                    case Header.Timeout:
                        request.Timeout = 3000;
                        break;
                    case Header.ContentTypeFormUrlEncoded:
                        request.AddHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
                        break;
                }
            }
        }
    }
}
