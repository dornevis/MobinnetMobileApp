using System.Collections.Generic;
using System.Linq;

namespace MobinnetMobileAppLibrary.Helper
{
    internal class MessageHelper
    {
        public static KeyValuePair<int, string> Message(Code code)
        {
            return ResponseMessages.First(d => d.Key == code.Value());
        }

        public enum Code
        {
            SendRegistrationVerificationCodeSuccess = 1000,
            SendRegistrationVerificationCodeFailed = 1001,
            RegisterInvalidMobileToken = 1002,
            RegisterSuccess = 1003,
            SendPasswordRecoveryVerificationCodeSuccess = 1004,
            SendPasswordRecoveryVerificationCodeFailed = 1005,
            SendPasswordRecoveryVerificationCodeInvalidPhoneNumber = 1006,
            SendRegistrationVerificationCodeDuplicatePhoneNumber = 1007,
            RegisterFailed = 1008,
            ChangePasswordInvalidMobileToken = 1009,
            ChangePasswordSuccess = 1010,
            ChangePasswordFailed = 1011,
            LoginHistorySuccess = 1012,
            LoginHistoryInvalidUser = 1013,
            LoginHistoryFailed = 1014,
            UpdateProfileSuccess = 1015,
            UpdateProfileFailed = 1016,
            UpdateProfileInvalidUser = 1017,
            LoginSuccess = 1018,
            LoginFailed = 1019,
            LoginInvalidData = 1020
        }

        public static readonly Dictionary<int, string> ResponseMessages = new Dictionary<int, string>
        {
            {(int) Code.SendRegistrationVerificationCodeSuccess, "کد فعال سازی برای شما ارسال شد"},
            {(int) Code.SendRegistrationVerificationCodeDuplicatePhoneNumber, "این کاربر قبلا در سیستم ثبت شده است"},
            {(int) Code.SendRegistrationVerificationCodeFailed, "امکان ثبت نام وجود ندارد. مجددا تلاش کنید"},
            {(int) Code.RegisterInvalidMobileToken, "کد فعال سازی معتبر نمی باشد"},
            {(int) Code.RegisterSuccess, "ثبت نام شما با موفقیت انجام شد"},
            {(int) Code.RegisterFailed, "امکان ثبت نام وجود ندارد. مجددا تلاش کنید"},
            {(int) Code.SendPasswordRecoveryVerificationCodeSuccess, "کد بازیابی کلمه عبور برای شما ارسال شد"},
            {(int) Code.SendPasswordRecoveryVerificationCodeFailed, "امکان بازیابی کلمه عبور وجود ندارد. مجددا تلاش کنید"},
            {(int) Code.SendPasswordRecoveryVerificationCodeInvalidPhoneNumber, "این شماره موبایل در سیستم ثبت نشده است"},
            {(int) Code.ChangePasswordInvalidMobileToken, "کد فعال سازی معتبر نمی باشد"},
            {(int) Code.ChangePasswordSuccess, "کلمه عبور جدید برای شما ثبت شد"},
            {(int) Code.ChangePasswordFailed, "امکان تغییر کلمه عبور وجود ندارد. مجددا تلاش کنید"},
            {(int) Code.LoginHistorySuccess, "لیست سوابق ورود دریافت شد"},
            {(int) Code.LoginHistoryInvalidUser, "کاربر معتبر نمی باشد"},
            {(int) Code.LoginHistoryFailed, "امکان مشاهده سوابق ورود وجود ندارد. مجددا تلاش کنید"},
            {(int) Code.UpdateProfileSuccess, "حساب کاربری شما با موفقیت بروزرسانی شد"},
            {(int) Code.UpdateProfileFailed, "امکان بروزرسانی حساب کاربری وجود ندارد. مجددا تلاش کنید"},
            {(int) Code.UpdateProfileInvalidUser, "کاربر معتبر نمی باشد"},
            {(int) Code.LoginSuccess, "با موفقیت وارد شدید"},
            {(int) Code.LoginFailed, "امکان ورود به حساب کاربری وجود ندارد. مجددا تلاش کنید"},
            {(int) Code.LoginInvalidData, "نام کاربری یا کلمه عبور اشتباه است"}
        };
    }
}
