import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:8080/api/admin', {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
            setMessage(response.data);
            })
            .catch(error => {
            console.error('There was an error fetching the admin message!', error);
            });

        axios.get('http://localhost:8080/api/admin/all', {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    return (
        <div>
            <h1>{message}</h1>
            <h2>All Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;