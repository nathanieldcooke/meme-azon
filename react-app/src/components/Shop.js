import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getMemesThunk } from "../store/memes";
import reviews, { getReviewsThunk } from "../store/reviews";
import Meme from "./Meme";
import './Shop.css'
// import './SplashPage.css'


const Shop = () => {

    const dispatch = useDispatch()

    const reviews = useSelector(state => state.reviews)
    const memes = useSelector(state => state.memes)
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

    // useEffect(() => {
        
    // },[reviews])

    return (
        <div className='main-memes'>
            <div className='memes'>
                {memes_arr.map((meme, idx) => (
                    <Meme key={`meme-${idx}`} meme={meme} reviews={reviews}/>
                ))}
            </div>
        </div>
    )
}

export default Shop;