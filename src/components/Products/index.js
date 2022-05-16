import React, { useContext } from 'react'
import { ShoppingContext } from '../ShoppingContext/ShoopingContext'
import './style.scss'


const Products = () => {
    const [productlist, cartProducts, setCartProducts] = useContext(ShoppingContext)
    

    const addToCart = product => {
        if(!cartProducts.some(obj => obj.id === product.id)){
            product.quantity = 1;
            setCartProducts([...cartProducts, product])
        } else {
            product.quantity++;
            setCartProducts([...cartProducts])
        }
    }


    return (
        <div>
            <div className="products-container">
                {productlist.products.map(product => 
                    <div className="products-item" key={product.id}>
                        <div className="image-container">
                            <div style={{backgroundImage: `url(${require(`../../assets/${product.category}${product.id}.jpeg`)})`}}
                                className="thumbnail">
                            </div>
                        </div>
                        <h3 className="title">{product.title}</h3>
                        <div className="description">{product.description}</div>
                        <div className="price">₹{product.price}</div>
                        <button onClick={() => {addToCart(product)}}>Add to Cart</button>
                </div> 
                )}
            </div>
        </div>
    )
}

export default Products