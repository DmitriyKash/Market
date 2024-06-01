import React, { useEffect } from 'react';

const TelegramAuth = () => {
  useEffect(() => {
    window.TelegramLoginWidget = {
      dataOnauth: (user) => {
        fetch('/auth/telegram', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        })
          .then(response => response.json())
          .then(data => {
            localStorage.setItem('token', data.access_token);
            window.location.href = '/products';
          })
          .catch(error => {
            console.error('Error:', error);
          });
      },
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login with Telegram</h1>
      <p>Please click the button below to login with Telegram.</p>
      <div
        className="telegram-login"
        data-telegram-login="YOUR_BOT_USERNAME"
        data-size="large"
        data-auth-url="http://localhost:8000/auth/telegram"
        data-request-access="write"
      ></div>
      <script
        async
        src="https://telegram.org/js/telegram-widget.js?7"
      ></script>
    </div>
  );
};

export default TelegramAuth;
