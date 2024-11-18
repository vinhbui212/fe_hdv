import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LDAP() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/ldap', {
        username: username,
        password: password,
      });


      const token = response.data.accessToken;
      console.log(response.data);
      localStorage.setItem('token', token);
      if (response.status === 200) {
        history('/user');
        setMessage('Đăng nhập thành công!');
      }
    } catch (error) {
      setMessage('Đăng nhập không thành công. Vui lòng kiểm tra lại tài khoản và mật khẩu.');
    }
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập bằng LDAP</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Tên đăng nhập:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mật khẩu:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default LDAP;
