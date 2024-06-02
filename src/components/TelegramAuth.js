import React, { useEffect } from 'react';

const TelegramAuth = () => {
  useEffect(() => {
    const initData = window.Telegram.WebApp.initData;

    fetch('http://localhost:8000/auth/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ initData }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem('token', data.access_token);
          window.Telegram.WebApp.sendData(JSON.stringify({ status: 'success' }));
          window.location.href = '/profile';
        } else {
          console.error('Authentication failed');
          window.Telegram.WebApp.sendData(JSON.stringify({ status: 'failure' }));
        }
      })
      .catch(error => {
        console.error('Error:', error);
        window.Telegram.WebApp.sendData(JSON.stringify({ status: 'failure' }));
      });

    window.Telegram.WebApp.ready();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Authenticating...</h1>
    </div>
  );
};

export default TelegramAuth;
