import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom'


function Product({ product }) {
    if (!product) return null;
    const { id, title, description, image, price, rating } = product;


    const navigate = useNavigate();



    return (
        <div>
            <div className='cards'>
                <div className='card'>
                    <h5 style={{ textAlign: 'center', height: '50px' }}>{title}</h5>
                    <img className='product-img' src={image} />
                    <h3 style={{ height: '70px', textAlign: 'right' }}>{price} €</h3>

                </div>
                <div className='detail-btn'>
                    <button onClick={() => navigate('/product-details/' + id)} className='detail-button'>Details</button>

                </div>
            </div>

        </div>

    )
}

export default Product