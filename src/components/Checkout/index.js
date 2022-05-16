import React, { useContext } from 'react'
import { ShoppingContext } from '../ShoppingContext/ShoopingContext'
import './style.scss'

const Checkout = () => {
    const [, cartProducts, , discountList] = useContext(ShoppingContext)


    const calculateTotal = () => {
        let total = 0;
        if (cartProducts.length !== 0) {
            const result = cartProducts.map(product => (product.price * product.quantity) + (product.price / 100) * product.tax * product.quantity).reduce((a, b) => a + b)
            total = result.toFixed(2);
        }
        return total
    }

    const calculateTax = () => {
        let total = 0;
        if (cartProducts.length !== 0) {
            const result = cartProducts.map(product => (product.price / 100) * product.tax * product.quantity).reduce((a, b) => a + b)
            total = result.toFixed(2);
        }
        return total
    }

    const discountApplied = () => {
        debugger
        const discounts = discountList;
        // let discountLabel = "";
        if (cartProducts.length !== 0) {
            const result = cartProducts.map(product => product.category).reduce((a, b) => a + "+" + b)
            // let array = result.split('+')
            // array = [...new Set(array)]
            // array = array.join("+")
            // discountLabel = array;
            // let discount_amounts = []
            for (var i = 0; i <= discounts.length; i++) {
                let label = discounts[i].label.join("+")
                if (label === result) {
                    return discounts[i].discount
                } else {
                    let label = discounts[i].label.reverse().join("+");
                    if (label === result) {
                        return discounts[i].discount
                    } else {
                        return 0;
                    }
                }

            }
        }

    }

    const proceedToCheckout = () => {
        alert(`Your total is ₹${calculateTotal()}`)
    }


    return (
        <div className="checkout-container">
            <div className="total">
                <span>Tax:</span>
                <span>₹{calculateTax()} {discountApplied()}</span>
            </div>
            <div className="total">
                <span>Discount:</span>
                <span>₹{discountApplied()}</span>
            </div>
            <div className="total">
                <span>Total:</span>
                <span>₹{calculateTotal()}</span>
            </div>
            <button onClick={() => proceedToCheckout()}>CHECKOUT</button>
        </div>
    )
}

export default Checkout