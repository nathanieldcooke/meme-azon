import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMemeInCartThunk } from "../store/cart";
import './CartMeme.css'

const CartMeme = ({cartItem, cartMeme}) => {

    const dispatch = useDispatch()

    const removeFromCart = (memeId) => {
        dispatch(deleteMemeInCartThunk(memeId))
    } 

    return (
        <>
        <div className='cart-meme'>
            <div className='cart-meme-img'>
                <img src={`${cartMeme.src}`}></img>
            </div>
            <div className='cart-meme-title-price'>
                <span>Title: {cartMeme.name}</span>
                <br></br>
                <span>Price: ${cartMeme.price}/unit</span>
                <br></br>
                <span>Quantity: {cartItem.quantity}</span>
            </div>
            <div>
                <button>Change Quantity</button>
                <button
                    onClick={() => removeFromCart(cartItem.id)}
                >Remove Item</button>
            </div>
        </div>
        </>
    )
}

export default CartMeme;