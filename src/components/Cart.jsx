import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';


const CartDetail = () => {
    const [cartData, setCartData] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/carts/5')
            .then(response => response.json())
            .then(data => {
                setCartData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <Navbar></Navbar>

            <div className="container mt-5">

                <h1>Cart Detail</h1>
                {cartData ? (
                    <div>
                        <p><strong>User ID:</strong> {cartData.userId}</p>
                        <p><strong>Date:</strong> {cartData.date}</p>
                        <h2>Items</h2>
                        <ul className="list-group">
                            {cartData.products.map(product => (
                                <li key={product.productId} className="list-group-item">
                                    <p><strong>Product ID:</strong> {product.productId}</p>
                                    <p><strong>Quantity:</strong> {product.quantity}</p>
                                </li>
                            ))}
                        </ul>
                        <button className='btn btn-info'>Thanh toán</button>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default CartDetail;

