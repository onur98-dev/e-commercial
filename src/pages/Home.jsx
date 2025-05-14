import React, { useState } from 'react'
import ProductList from '../components/productList'
import { useSelector } from 'react-redux'

function Home() {


    return (
        <div>
            <ProductList />

        </div>
    )
}

export default Home