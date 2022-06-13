import React from "react";
import TelegramLoginButton from 'react-telegram-login';

const handleTelegramResponse = response => {
   console.log(response);
};

function LoginByTelegram() {
   return (
      <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="TEST_JBOT_TELEGRAM_LOGIN_bot" />
   )
}

export default LoginByTelegram;