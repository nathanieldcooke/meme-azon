import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMemesInCartThunk } from "../store/cart";
import CartMeme from "./CartMeme";
import './Cart.css'
const Cart = () => {

    const user = useSelector(state => state.session.user)
    const cart = useSelector(state => state.cart)
    const cartArr = []
    for (let cartKey in cart) {
        cartArr.push(cart[cartKey])
    }

    const dispatch = useDispatch()
    
    useEffect (() => {
        // console.log('USER: ',user)
        if (user) {
            dispatch(getMemesInCartThunk(user?.id))
        }
    }, [dispatch, user])

    const cartTotal = () => {
        return cartArr.reduce((accu, cartMeme) => {
            return accu + Number(cartMeme.meme.price) * cartMeme.quantity
        }, 0)
    }

    return (
        <div className='cart-main-memes'>
            <div >
                <div className='cart-memes'>
                    {cartArr.map((cartMeme, idx) => (
                        <CartMeme key={`meme-${idx}`} cartItem={cartMeme} cartMeme={cartMeme.meme} />
                    ))}
                </div>
                <div className='cart-total'>
                    <span>Total:</span>
                    <span>${cartTotal()}</span>
                </div>
            </div>
        </div>
    )
}

export default Cart;