const GET_REVIEWS = 'reviews/GET_REVIEWS'
const ADD_REVIEW = 'reviews/ADD_REVIEW'
const EDIT_REVIEW = 'reviews/EDIT_REVIEW'
const DELETE_REVIEW = 'reviews/DELETE_REVIEW'

const getReviews = (reviews) => ({
    type: GET_REVIEWS,
    payload: reviews
})

const addReview = (review) => ({
    type: ADD_REVIEW,
    payload: review
})

const editReview = (review) => ({
    type: EDIT_REVIEW,
    payload: review
})

const deleteReview = (id) => ({
    type: DELETE_REVIEW,
    payload: id
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


export const editReviewThunk = (id, body, rating) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ body, rating })
    })

    try {
        if (!res.ok) throw res
        const review = await res.json();

        dispatch(editReview(review))
    } catch (error) {
        console.log(error)
    }

}

export const deleteReviewThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE'
    })

    try {
        if (!res.ok) throw res
        const id = await res.json();

        dispatch(deleteReview(id))
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
        case EDIT_REVIEW:
            stateDup[action.payload.id].body = action.payload.body
            stateDup[action.payload.id].rating = action.payload.rating
            return stateDup
        case DELETE_REVIEW:
            delete stateDup[action.payload]
            return stateDup
        default:
            return state;
    }
}