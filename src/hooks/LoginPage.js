import React from 'react';
import '../styles/BackgroundVideo.css';

const LoginPage = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;