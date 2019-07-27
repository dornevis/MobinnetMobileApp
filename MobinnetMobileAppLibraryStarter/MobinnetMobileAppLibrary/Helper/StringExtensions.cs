using System.Web;
using HtmlAgilityPack;

namespace MobinnetMobileAppLibrary.Helper
{
    internal static class StringExtensions
    {
        public static string Decode(this string inputText)
        {
            return HttpUtility.HtmlDecode(inputText);
        }

        public static string ToEnglishNumber(this string inputText)
        {
            string[] persian = { "۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹" };

            for (var j = 0; j < persian.Length; j++)
            {
                inputText = inputText.Replace(persian[j], j.ToString());
            }

            return inputText;
        }

        public static string DecodeTrim(this string inputText)
        {
            return string.IsNullOrEmpty(inputText) ? "" : HttpUtility.HtmlDecode(inputText).Trim();
        }

        public static HtmlDocument LoadContentForParser(this string source)
        {
            var htmlDocument = new HtmlDocument();
            htmlDocument.LoadHtml(source);
            return htmlDocument;
        }

        public static string RemoveDoubleGiume(this string inputText)
        {
            return inputText.Replace("\"", "");
        }
    }
}