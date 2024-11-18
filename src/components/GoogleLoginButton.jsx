import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GoogleLoginButton = () => {
  const history = useNavigate();

  const handleLoginSuccess = async (response) => {
    const googleToken = response.credential;

    try {
      const res = await axios.post('http://localhost:8080/api/auth/googleRegister', {
        token: googleToken  
      });

      const token = res.data.accessToken;
      console.log('JWT:', token);
      console.log(res.data);
      localStorage.setItem('token', token);
      history('/user'); 
    } catch (error) {
      console.error('Error verifying token:', error);
    }
  };

  const handleLoginFailure = (error) => {
    console.log('Login Failed:', error);
  };

  return (
    <GoogleOAuthProvider clientId="842664999029-gnf4hju7n3o8227i7oeeq2o5fe0shu2c.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
