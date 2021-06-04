import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMemeInCartThunk, updateMemeInCartThunk } from "../store/cart";
import './CartMeme.css'

const CartMeme = ({cartItem, cartMeme}) => {

    const dispatch = useDispatch()
    
    const [change, setChange] = useState(false) 
    const [num, setNum] = useState(cartItem.quantity);

    const removeFromCart = (memeId) => {
        dispatch(deleteMemeInCartThunk(memeId))
    } 

    const updateQuantity = () => {
        if (change) {
            dispatch(updateMemeInCartThunk(cartItem.id, num))
            setChange(false)
        } else {
            setChange(true)
        }
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
                <button
                    onClick={() => updateQuantity(cartItem.Id)}
                    >{change ? 'Save' : 'Change Quantity'}</button>
                <button
                    onClick={() => removeFromCart(cartItem.id)}
                >Remove Item</button>
                {
                change 
                ? 
                <div className='meme-quantity'>
                    <button
                        className='pos'
                        onClick={() => {
                            if (num === 1) {
                                setNum(1)
                            } else {
                                setNum(num - 1)
                            }
                        }}
                    >-</button>
                    <span className='num-avail'>{num}</span>
                    <button
                        className='neg'
                        onClick={() => {
                            if (num === cartMeme.quantityAvailable) {
                                setNum(num)
                            } else {
                                setNum(num + 1)
                            }
                        }
                        }
                    >+</button>
                </div>
                :
                null
                }
            </div>
        </div>
        </>
    )
}

export default CartMeme;