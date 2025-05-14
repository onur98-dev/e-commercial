import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaMinusSquare } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';







function ProductDetails() {

    const { id } = useParams()
    const { products, selectedProducts } = useSelector((store) => store.product);
    const { title, description, image, price, rating } = selectedProducts;


    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {

        setCount(count - 1)
        if (count == 0) {
            setCount(0)
        }
    }

    const dispatch = useDispatch();

    useEffect(() => {
        getProductById()
    }, [])

    const getProductById = () => {

        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        })
    }


    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count

        }
        dispatch(addToBasket(payload))
        dispatch(calculateBasket())
    }



    return (

        <div className='flex-row' style={{
        }}>
            <div style={{ marginRight: '40px' }}>
                <img style={{ height: '400px', width: '400px' }} src={image} alt=''></img>
            </div>
            <div />
            <div>
                <div style={{ flexDirection: 'flex' }}>
                    <h1 style={{ textAlign: 'center', padding: '5px' }}>{title}</h1>
                </div>

                <div>
                    <p style={{ fontSize: '20px', marginLeft: '20px' }}>{description}</p>
                    <h2 style={{ fontSize: '50px' }}>{price} €</h2>
                    <div>
                        <FaMinusSquare onClick={decrement} style={{ fontSize: '30px', cursor: 'pointer' }} /><span id='counter' style={{ fontSize: '45px', padding: '10px' }}>{count}</span>
                        <FaPlusSquare onClick={increment} style={{ fontSize: '30px', cursor: 'pointer' }} />

                    </div>
                    <button onClick={addBasket} style={{ height: '35px', width: '150px', border: 'none', backgroundColor: 'black', color: 'white', cursor: 'pointer', fontSize: 'larger', borderRadius: '2px', marginTop: '10px' }}>Add to Cart</button>
                </div>
            </div>




        </div>



    )
}

export default ProductDetails