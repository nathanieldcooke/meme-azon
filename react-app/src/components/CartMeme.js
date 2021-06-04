import React, { useEffect, useState } from "react";
import './CartMeme.css'

const CartMeme = ({cartMeme}) => {

    removeFromCart()

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
            </div>
            <div>
                <button>Change Quantity</button>
                <button
                    onClick={() => removeFromCart()}
                >Remove Item</button>
            </div>
        </div>
        </>
    )
}

export default CartMeme;