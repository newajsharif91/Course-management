// components/LoginPage.tsx
import React, { useState } from 'react';
import { AuthService } from '../services/AuthService';
import { User } from '../models/User';
import { useNavigate } from 'react-router';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user: User | undefined = AuthService.login(email, password);
    if (user) {
      if (user.role === 'Client') {
        navigate('/');
      } else if (user.role === 'Admin') {
        navigate('/dashboard');
      }
      // Redirect to appropriate page based on the user role
      // You can use react-router-dom for this
      console.log('Logged in as', user.role);
    } else {
      console.log('Invalid email or password');
    }
  };

  const handleForgotPassword = () => {
    AuthService.forgotPassword(email);
    console.log('Password reset instructions sent to your email');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleForgotPassword}>Forgot Password</button>
      </div>
    </div>
  );
};

export default LoginPage;
