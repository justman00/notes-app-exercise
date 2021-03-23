import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // Controlled form
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/api/auth/login`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 200) {
        // eu sunt logat
        setIsAuthenticated(true);
        return history.push('/');
      }

      setError('Invalid credentials');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label>
        password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      {error && <div>{error}</div>}
      <button type="Submit">Submit</button>
    </form>
  );
}

export default Login;
