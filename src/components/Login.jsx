import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GoogleLoginButton from './GoogleLoginButton';
import LDAP from './LDAP';

const Login1 = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const history = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                username,
                password,
            });
            setMessage(response.data.message);
            const token = response.data.accessToken;
            console.log(response.data);
            localStorage.setItem('token', token);
           

            if (response.data.message === 'you are [ROLE_ADMIN]') {
                history('/admin');
            }
            else {
                history('/user');
            }
        }
        catch (error) {
            setMessage('Login failed. Please check your credentials.');
        }
    };
    const handleLdap = () => {
        history('/ldap');
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <button onClick={handleLdap}>
                Login by LDAP
            </button>
            <GoogleLoginButton style={"width: 50%"} />
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login1;