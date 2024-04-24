import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    const id = params.id;
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            })
            .catch((err) => console.log(err));
    }, [id]);
    const handleAdd=()=>{
        alert('Thêm vào giỏ hàng thành công');
    }
    return (
        <div>
            <div>
                <Navbar />
            </div>
            
            <div>
                <div className='container'>
                   <div className='row'>
                    <div className='col mt-3'>
                        <img className='w-50' src={product.image} alt={product.title} />
                    </div>
                    <div className='col mt-3'>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                        <button className='btn btn-success' onClick={handleAdd}>Thêm vào giỏ hàng</button>
                    </div>

                   </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
