import PageContainer from './container/pageContainer'
import './App.css'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Product from './pages/Product'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasket, calculateReducedBasket, removeFromBasket, setDrawer } from './redux/slices/basketSlice'
import { useEffect } from 'react'

function App() {

  const dispatch = useDispatch()
  const { products, drawer, totalAmount } = useSelector((store) => store.basket)


  useEffect(() => {
    dispatch(calculateBasket())
  }, [])



  return (
    <>
      <div>
        <div>
          <PageContainer>
            <Loading />
            <Header />
            <RouterConfig />
            <Product />
            <Drawer anchor='right' open={drawer} onClose={() => { dispatch(setDrawer()) }} className='drawer' style={{ padding: '20px' }}>
              {
                products && products.map((product) => {

                  return (
                    <div key={product.id} className='flex-row' style={{ padding: '20px', }}>

                      <img src={product.image} width={'50px'} height={'50px'} key={product.id} />
                      <p style={{ width: '320px', marginRight: '5px', marginLeft: '10px' }}>{product.title} ({product.count})</p>
                      <p style={{ fontWeight: 'bold', width: '60px' }}>{product.price} € </p>
                      <br />
                      <button type='reset' className='clearBtn' style={{ marginLeft: '5px', height: '35px' }} onClick={() => { dispatch(removeFromBasket(product)), dispatch(calculateBasket()) }}> Remove from Cart

                      </button>

                    </div>


                  )

                })
              }
              <hr style={{ width: '550px' }} />
              <div style={{ fontFamily: 'arial', fontWeight: 'bold', textAlign: 'center' }}>
                {totalAmount}
              </div>
            </Drawer>
          </PageContainer>
        </div>
      </div>
    </>
  )
}

export default App
