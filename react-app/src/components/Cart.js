import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, emptyCartThunk, getMemesInCartThunk } from "../store/cart";
import CartMeme from "./CartMeme";
import './Cart.css'
import { makePurchaseThunk } from "../store/purchases";
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

    const purchase = async () => {
        await dispatch(makePurchaseThunk(user?.id, cart))
        await dispatch(emptyCartThunk(user?.id))
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
                    <button
                        onClick={purchase}
                    >Purchase</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;