import React, { useEffect, useState } from 'react'
import { IoBasketSharp } from "react-icons/io5";
import { BsBrightnessHigh } from "react-icons/bs";
import { MdOutlineBrightness3 } from "react-icons/md";
import { useNavigate } from 'react-router';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';
import { FcSearch } from "react-icons/fc";


function Header() {

    const dispatch = useDispatch()


    const navigate = useNavigate()
    const { products } = useSelector((store) => store.basket)

    const [theme, setTheme] = useState(true);
    const toggleTheme = () => {



        const root = document.getElementById('root');

        setTheme(!theme)

        if (theme) {
            root.style.backgroundColor = 'black'
            root.style.color = 'white'


        } else {
            root.style.backgroundColor = '#fff'
            root.style.color = 'black'
        }
    }


    return (

        <div className='flex-row'>
            <div className='left-side'>
                <img onClick={() => navigate('/')} className='lg' style={{ height: '70px', width: '70px', cursor: 'pointer', marginRight: '10px' }} src='/images/sa.png' alt='Lion' />
                <h5 style={{ fontWeight: '550' }}>Sarıaslan Group</h5>
            </div>
            <div className='right-side'>
                <div className='flex-row' style={{ position: 'relative', width: '100%' }}>

                    <input id='searchInput' className='searchBar' type='search' placeholder='Search for products...'


                    />      <FcSearch className='searchIcon' />


                    <Badge badgeContent={products.length} color="success">
                        <IoBasketSharp className='icon' style={{ marginLeft: '45px', marginTop: '-8px', fontSize: '25px' }} onClick={() => { dispatch(setDrawer()) }} />
                    </Badge>
                    <div className='theme' >
                        {theme ? <MdOutlineBrightness3 className='dark-mode' onClick={toggleTheme} style={{ marginLeft: '30px' }} /> : <BsBrightnessHigh className='bright-mode' onClick={toggleTheme} style={{ marginLeft: '30px' }} />}

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header