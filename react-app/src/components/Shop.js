import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getMemesInCartThunk } from "../store/cart";
import { getMemesThunk } from "../store/memes";
import reviews, { getReviewsThunk } from "../store/reviews";
import Meme from "./Meme";
import './Shop.css'
// import './SplashPage.css'


const Shop = () => {

    const dispatch = useDispatch()

    const reviews = useSelector(state => state.reviews)
    const memes = useSelector(state => state.memes)
    const user = useSelector(state => state.session.user)
    const cart = useSelector(state => state.cart)

    const [memeIdsInCart, setMemeIdsInCart] = useState(new Set())

    const memes_arr = [] 
    for (let meme_key in memes) {
        memes_arr.push(memes[meme_key])
    }

    useEffect(() => {
            dispatch(getMemesThunk())
    }, [dispatch])

    useEffect(() => {
        dispatch(getReviewsThunk())
    }, [dispatch])

<<<<<<< HEAD
    // useEffect(() => {
        
    // },[reviews])
=======
    useEffect(() => {
        if (user) {
            dispatch(getMemesInCartThunk(user?.id))
        }
    }, [dispatch, user])

    useEffect(() => {

        const meme_ids = [] 
        for (let cart_key in cart) {
            meme_ids.push(cart[cart_key].memeId)
        }

        setMemeIdsInCart(new Set(meme_ids))

    }, [cart])
>>>>>>> 2feaddf95a5991f607269223b4fbbd0b94e74c9a

    return (
        <div className='main-memes'>
            <div className='memes'>
                {memes_arr.map((meme, idx) => (
<<<<<<< HEAD
                    <Meme key={`meme-${idx}`} meme={meme} reviews={reviews}/>
=======
                    <Meme key={`meme-${idx}`} meme={meme} inCart={memeIdsInCart.has(meme.id)}/>
>>>>>>> 2feaddf95a5991f607269223b4fbbd0b94e74c9a
                ))}
            </div>
        </div>
    )
}

export default Shop;