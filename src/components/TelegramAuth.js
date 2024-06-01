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
    <div>
      <script
        async
        src="https://telegram.org/js/telegram-widget.js?7"
        data-telegram-login="YOUR_BOT_USERNAME"
        data-size="large"
        data-auth-url="/auth/telegram"
        data-request-access="write"
      ></script>
    </div>
  );
};

export default TelegramAuth;
