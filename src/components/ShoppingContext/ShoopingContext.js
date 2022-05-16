import React, { createContext, useState } from 'react'
import data from '../../data'
import discount from '../../discount'

export const ShoppingContext = createContext();

export const ShoppingProvider = props => {
    const productList = data;
    const discountList = discount;
    const [cartProducts, setCartProducts] = useState([])

    return (
        <ShoppingContext.Provider value={[productList ,cartProducts, setCartProducts,discountList]}>
            {props.children}
        </ShoppingContext.Provider>
    )
}