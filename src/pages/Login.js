import React, { useEffect } from 'react';

function Login() {
  useEffect(() => {
    fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: 'test2@test.com',
        password: '1234',
      }),
    })
      .then(() => {
        console.log('success');
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <div>hello</div>;
}

export default Login;
