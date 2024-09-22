import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthProvider';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    axios.post('https://dummyjson.com/auth/login', {
      username: username,
      password: password,
    })
    .then(response => {
      const { token } = response.data;
      login(token); // Call login from AuthProvider
    })
    .catch(() => {
      setError('Invalid username or password.');
    });
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
