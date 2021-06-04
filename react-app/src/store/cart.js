const ADD_TO_CART = 'cart/ADD_TO_CART'
const GET_MEMES_IN_CART = 'cart/GET_MEMES_IN_CART'

const getMemesInCart = (memes) => ({
    type: GET_MEMES_IN_CART,
    payload: memes
})

const addToCart = (meme) => ({
    type: ADD_TO_CART,
    payload: meme
})

export const getMemesInCartThunk = (userId) => async (dispatch) => {
    const res = await fetch(`/api/carts/${userId}`)

    try {
        if (!res.ok) throw res
        const cartMemes = await res.json();
        dispatch(getMemesInCart(cartMemes))
    } catch (error) {
        console.log(error)
    }
}

export const addToCartThunk = (userId, memeId, quantity) => async (dispatch) => {
    const res = await fetch('/api/carts/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId, memeId, quantity })
    })

    try {
        if (!res.ok) throw res
        const meme = await res.json();
        dispatch(addToCart(meme))
    } catch (error) {
        console.log(error)
    }
}

export default function cart(state = {}, action) {
    const stateDup = {...state}
    switch (action.type) {
        case GET_MEMES_IN_CART:
            return action.payload
        case ADD_TO_CART:
            stateDup[action.payload.id] = action.payload
            return stateDup
        default:
            return state;
    }
}