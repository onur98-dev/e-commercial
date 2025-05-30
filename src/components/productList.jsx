import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'
import Product from '../pages/Product'


function productList() {


    const dispatch = useDispatch()
    const { products } = useSelector((store) => store.product)

    console.log(products)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])


    return (
        <div className='flex-row' style={{ flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            {
                products && products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default productList