const GET_REVIEWS = 'reviews/GET_REVIEWS'

const getReviews = (reviews) => ({
    type: GET_REVIEWS,
    payload: reviews
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

export default function reviews(state = {}, action) {
    const stateDup = {...state}
    switch (action.type) {
        case GET_REVIEWS:
            return action.payload;
        default:
            return state;
    }
}