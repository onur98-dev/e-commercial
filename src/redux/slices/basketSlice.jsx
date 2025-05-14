import { createSlice } from '@reduxjs/toolkit'

export const getBasketFromStorage = () => {
    if (localStorage.getItem('basket')) {
        return JSON.parse(localStorage.getItem('basket'))

    } return []
}


const initialState = {
    products: getBasketFromStorage(),
    drawer: false,
    totalAmount: 0
}


const writeFromBasketToStorage = (basket) => {
    localStorage.setItem('basket', JSON.stringify(basket));
}




export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id === action.payload.id);
            if (findProduct) {

                const extractedProducts = state.products.filter((product) => product.id != action.payload.id);
                findProduct.count += action.payload.count;
                state.products = [...extractedProducts, findProduct];
                writeFromBasketToStorage(state.products)

            } else {
                state.products = [...state.products, action.payload]
                writeFromBasketToStorage(state.products)

            }



        },

        setDrawer: (state) => {

            state.drawer = !state.drawer

        },
        calculateBasket: (state) => {
            if (state.products.length === 0) {
                state.totalAmount = "Your cart is empty"
            } else {
                let totalCharge = 0
                state.products && state.products.forEach(product => {
                    totalCharge += product.price * product.count
                    state.totalAmount = "Total Charge: " + totalCharge.toFixed(2) + " € "
                });
            }
        },


        removeFromBasket: (state, action) => {
            const removeProduct = state.products && state.products.find((product) => product.id === action.payload.id);
            if (removeProduct) {
                if (removeProduct.count > 1) {
                    removeProduct.count -= 1;
                    writeFromBasketToStorage(state.products)
                } else {
                    state.products = state.products.filter((product) => product.id !== action.payload.id)
                    writeFromBasketToStorage(state.products)

                }


            }
        },
        calculateReducedBasket: (state) => {

            state.products && state.products.forEach((product) => {
                totalCharge -= product.price - product.count
                state.totalAmount = "Total Charge: " + totalCharge.toFixed(2) + " € "
            })
        }
    }
})



export const { addToBasket, setDrawer, calculateBasket, removeFromBasket, calculateReducedBasket } = basketSlice.actions

export default basketSlice.reducer