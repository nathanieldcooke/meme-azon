import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addToCartThunk } from "../store/cart";
import { addReviewThunk, deleteReviewThunk, editReviewThunk } from "../store/reviews";
import './Meme.css'
// import './SplashPage.css'


const Meme = ({meme}) => {
    // console.log(meme)
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const reviews = useSelector(state => state.reviews)


    const [num, setNum] = useState(1);
    const [seeMore, setSeeMore] = useState(false);
    const [showReview, setShowReview] = useState(false)
    const [showLeaveReview, setShowLeaveReview] = useState(false)
    const [body, setBody] = useState('')
    const [rating, setRating] = useState(5)
    const [edit, setEdit] = useState(false)
    const [revTarget, setRevTarget] = useState(null)
    const [leftRevsMemeId, setLeftRevsMemeId] = useState(new Set())


    useEffect(() => {
        if (reviews) {
            for (let review_key in reviews) {
                let review = reviews[review_key]
                if (review.userId === user?.id) { 
                    setLeftRevsMemeId(leftRevsMemeId.add(review.memeId))
                }
            }
        }
    }, [reviews])



    const getReviews = (memeId) => {

        const reviewArr = []

        for (let reviewId in reviews){
            let review = reviews[reviewId]
            if (review.memeId === memeId) {
                reviewArr.push(review)
            }
        }
        return reviewArr
    }

    const addMeme = (user, meme, quantity) => {
        // console.log(user.id, meme.id, quantity)
        dispatch(addToCartThunk(user.id, meme.id, quantity))
    }

    const leaveReview = (user, meme) => {
        // console.log(user.id, meme.id, body, rating)
        dispatch(addReviewThunk(user.id, meme.id, body, rating))
    }

    const deleteReview = (review) => {
        dispatch(deleteReviewThunk(review.id))
    }

    const editReview = (review) => {
        // body rating
        dispatch(editReviewThunk(review.id, body, rating))
    }

    return (
        <div className='meme'>
            <div className='meme-title' >
                {meme.name}
            </div>
            <div className='meme-img'>
                <img alt='item in cart' src={`${meme.src}`}></img>
            </div>
            <div className='price-stock'>
                <span>
                    Price: ${meme.price}
                </span>
                <span>
                    In Stock: {meme.quantityAvailable}
                </span>
            </div>
            <div className='add-to-cart'>
                <button
                    onClick={() => addMeme(user, meme, num)}
                >Add To Cart</button>
                <div className='meme-quantity'>
                    <button
                    className='pos'
                    onClick={() => { 
                        if (num === 1){
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
                        if (num === meme.quantityAvailable){
                            setNum(num)
                        } else {
                            setNum(num + 1)}
                        }
                    }
                    >+</button>
                </div>
            </div>
            <div className='meme-show-button'>
                <button
                    onClick={() => {
                        seeMore ? setSeeMore(false) : setSeeMore(true)
                    }}
                >{seeMore ? "Show Less" : "See More Details"}</button>
            </div>
            {
            seeMore ? 
                <>
                    <label>Description:</label>
                    <div>
                        {meme.description}
                    </div>
                    <br></br>
                    <label>Reviews:</label>
                    <div>
                        <div>
                            {
                            showReview 
                            ? 
                            <button
                                onClick={() => {setShowReview(false)}}
                            >Hide Reviews</button> 
                            : 
                            <button
                                onClick={() => { setShowReview(true) }}
                            >Show Reviews</button>}
                                {
                                showLeaveReview
                                ?
                                <>
                                    <div>
                                        <button
                                            onClick={() => { 
                                                setShowLeaveReview(false) 
                                                setBody('')
                                                setRating(5)
                                            }}
                                        >Cancel</button>
                                        <button
                                            onClick={() => { 
                                                leaveReview(user, meme) 
                                                setShowLeaveReview(false)
                                                leftRevsMemeId.add(meme.id)
                                                setLeftRevsMemeId(leftRevsMemeId)

                                                setBody('')
                                                setRating(5)
                                            }}
                                        >Save</button>
                                    </div>
                                    <div>
                                        <label>Rating:</label>
                                            <select
                                                value={rating}
                                                onChange={(e) => setRating(e.target.value)}
                                            >
                                                <option
                                                    value={1}
                                                >1</option>
                                                    <option
                                                    value={2}
                                                >2</option>
                                                <option
                                                    value={3}
                                                >3</option>
                                                <option
                                                    value={4}
                                                >4</option>
                                                <option
                                                    value={5}
                                                >5</option>
                                            </select>
                                        <label>Review:</label>
                                        <input
                                            placeholder='Your Review'
                                            value={body}
                                            onChange={(e) => setBody(e.target.value)}
                                            required
                                        />
                                    </div>
                                </>
                                :
                                leftRevsMemeId.has(meme.id)
                                ?
                                // <button
                                //     onClick={() => {
                                //         setShowLeaveReview(true)
                                //         setShowReview(true)
                                //     }}
                                // >See My Review</button>
                                // <span>Review Left</span>
                                null
                                :
                                <button
                                    onClick={() => { 
                                        setShowLeaveReview(true) 
                                        setShowReview(true)
                                    }}
                                >Leave Review</button>
                                }
                        </div>

                        {showReview ? getReviews(meme.id).map((review, idx) => (
                            <div key={`rev-${idx}`} className='review'>
                                <div>{`${review.firstName} ${review.lastName}`}</div>
                                {
                                edit && revTarget === `rev-${review.id}`
                                ?
                                <>
                                    <label>Rating:</label>
                                    <select
                                        value={rating}
                                        onChange={(e) => setRating(e.target.value)}
                                    >
                                        <option
                                            value={1}
                                        >1</option>
                                        <option
                                            value={2}
                                        >2</option>
                                        <option
                                            value={3}
                                        >3</option>
                                        <option
                                            value={4}
                                        >4</option>
                                        <option
                                            value={5}
                                        >5</option>
                                    </select>
                                    <label>Review: </label>
                                    <input
                                        placeholder='Your Review'
                                        value={body}
                                        onChange={(e) => setBody(e.target.value)}
                                        required
                                    />
                                </>
                                :
                                review.body}
                                {
                                    review.userId === user.id
                                        ?
                                        <>
                                            {
                                            edit && revTarget === `rev-${review.id}`
                                            ?
                                            <button
                                                onClick={() => {
                                                    setEdit(false)
                                                    editReview(review)
                                                    setShowLeaveReview(false)
                                                    setEdit(false)
                                                    setBody('')
                                                    setRating(5)
                                                }}
                                            >Save</button>
                                            : 
                                            <button id={`rev-${review.id}`}
                                                onClick={(e) => {
                                                    setEdit(true)
                                                    setRevTarget(e.target.id)
                                                    console.log(e.target.value)
                                                    setBody(review.body)
                                                    setRating(review.rating)
                                                }}
                                            >Edit</button>
                                            }
                                            <button
                                                onClick={() => {
                                                    deleteReview(review)
                                                    leftRevsMemeId.delete(meme.id)
                                                    setLeftRevsMemeId(leftRevsMemeId)
                                                }}
                                            >Delete</button>
                                        </>
                                        :
                                        null
                                }
                            </div>
                        )): null }
                    </div>
                </>
            :
                null
            }
        </div>
    )
}

export default Meme;