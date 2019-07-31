namespace MobinnetMobileAppApi.Requests
{
    public class ChangePasswordRequest
    {
        public string PhoneNumber { get; set; }

        public string MobileToken { get; set; }

        public string NewPassword { get; set; }
    }
}