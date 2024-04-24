import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import './Home.css';
const Home = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            setProducts(res.data);
        });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container1">
                <div className=''></div>
                <div className="products1">
                    {products.map(product => (
                        <div className="product1" key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <a style={{ textDecoration: "none" ,color:"black" }} href={`/product/${product.id}`}>
                                                <p className='fs-2 fst-italic'>{product.title}</p>
                                            </a>
                            <p>{product.price}</p>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
