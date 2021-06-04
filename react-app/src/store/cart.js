const ADD_TO_CART = 'cart/ADD_TO_CART'

const addToCart = (meme) => ({
    type: ADD_TO_CART,
    payload: meme
})

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
        case ADD_TO_CART:
            stateDup[action.payload.id] = action.payload
            return stateDup
        default:
            return state;
    }
}