import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const refreshToken = () => {
  // Kullanıcının uygulamayı kullanmaya başladığı zamanı al
  const loginTime = localStorage.getItem("loginTime");

  // Token süresi dolmuşsa, token'ı yenile
  if (new Date().getTime() - loginTime > 3600000) {
    auth.currentUser.refreshToken.then((token) => {
      localStorage.setItem("token", token);
    });
  }
};

refreshToken();

ReactDOM.render(<App />, document.getElementById('root'));
