import React, { useEffect, useState } from 'react';
import axios from 'axios';

const User = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:8080/api/user', {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
            setMessage(response.data);
            setUsers(response.data.username);
            })
            .catch(error => {
            console.error('There was an error fetching the admin message!', error);
            });
        }, []);
  

    return (
        <div>
            
            <h2>Hello User</h2>
           
        </div>
    );
};

export default User;