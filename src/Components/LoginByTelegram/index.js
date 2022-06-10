import React from "react";
import TelegramLoginButton from 'react-telegram-login';

const handleTelegramResponse = response => {
   console.log(response);
};

function LoginByTelegram() {
   return (
      <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="JobsterJbot" />
   )
}

export default LoginByTelegram;