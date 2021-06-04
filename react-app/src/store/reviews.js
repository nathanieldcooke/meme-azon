const GET_REVIEWS = 'reviews/GET_REVIEWS'
const ADD_REVIEW = 'reviews/ADD_REVIEWS'


const getReviews = (reviews) => ({
    type: GET_REVIEWS,
    payload: reviews
})

const addReview = (review) => ({
    type: ADD_REVIEW,
    payload: review
})

export const getReviewsThunk = () => async (dispatch) => {
    const res = await fetch(`/api/reviews/`)

    try {
        if (!res.ok) throw res
        const reviews = await res.json();
        dispatch(getReviews(reviews))
    } catch (error) {
        console.log(error)
    }
}

export const addReviewThunk = (userId, memeId, body, rating) => async (dispatch) => {
    const res = await fetch('/api/reviews/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId, memeId, body, rating })
    })

    try {
        if (!res.ok) throw res
        const review = await res.json();
        dispatch(addReview(review))
    } catch (error) {
        console.log(error)
    }
}

export default function reviews(state = {}, action) {
    const stateDup = {...state}
    switch (action.type) {
        case GET_REVIEWS:
            return action.payload;
        case ADD_REVIEW:
            stateDup[action.payload.id] = action.payload
            return stateDup
        default:
            return state;
    }
}