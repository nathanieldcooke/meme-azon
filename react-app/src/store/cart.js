const ADD_TO_CART = 'cart/ADD_TO_CART'
const GET_MEMES_IN_CART = 'cart/GET_MEMES_IN_CART'
const UPDATE_MEME_IN_CART = 'cart/UPDATE_MEMES_IN_CART'
const EMPTY_CART = 'cart/EMPTY_CART'
const DELETE_MEME_IN_CART = 'cart/DELETE_MEME_IN_CART'

const getMemesInCart = (memes) => ({
    type: GET_MEMES_IN_CART,
    payload: memes
})

export const emptyCart = () => ({
    type: EMPTY_CART,
})

const addToCart = (meme) => ({
    type: ADD_TO_CART,
    payload: meme
})

const updateMemeInCart = (meme) => ({
    type: UPDATE_MEME_IN_CART,
    payload: meme
})

const deleteMemeInCart = (id) => ({
    type: DELETE_MEME_IN_CART,
    payload: id
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

export const updateMemeInCartThunk = (id, quantity) => async (dispatch) => {
    const res = await fetch(`/api/carts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ quantity })
    })

    try {
        if (!res.ok) throw res
        const meme = await res.json();

        dispatch(updateMemeInCart(meme))
    } catch (error) {
        console.log(error)
    }

}


export const deleteMemeInCartThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/carts/${id}`, {
        method: 'DELETE'
    })

    try {
        if (!res.ok) throw res
        const id = await res.json();

        dispatch(deleteMemeInCart(id))
    } catch (error) {
        console.log(error)
    }
}

export const emptyCartThunk = (userId) => async (dispatch) => {
    const res = await fetch(`/api/carts/empty/${userId}`, {
        method: 'DELETE'
    })

    try {
        if (!res.ok) throw res
        dispatch(emptyCart())
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
        case UPDATE_MEME_IN_CART:
            stateDup[action.payload.id].quantity = action.payload.quantity
            return stateDup
        case DELETE_MEME_IN_CART:
            delete stateDup[action.payload]
            return stateDup
        case EMPTY_CART:
            return {}
        default:
            return state;
    }
}