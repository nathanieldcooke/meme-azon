import emptyCartThunk from './cart'

const GET_PURCHASES = 'purchases/GET_PURCHASES';
const MAKE_PURCHASE = 'purchases/MAKE_PURCHASE';
// const EMPTY_CART = 'cart/EMPTY_CART'

const getPurchases = (purchases) => ({
    type: GET_PURCHASES,
    payload: purchases
})

const makePurchase = (purchase) => ({
    type: MAKE_PURCHASE,
    payload: purchase
})



export const getPurchasesThunk = (userId) => async (dispatch) => {
    const res = await fetch(`/api/purchases/${userId}/`)

    try {
        if (!res.ok) throw res
        const purchases = await res.json();
        dispatch(getPurchases(purchases));
    } catch (error) {
        console.log(error)
    }

}

export const makePurchaseThunk = (userId, purchase) => async (dispatch) => {
    const res = await fetch(`/api/purchases/${userId}/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ purchase })
    })

    try {
        if (!res.ok) throw res
        const purchase = await res.json();
        dispatch(makePurchase(purchase));
        // await dispatch(emptyCartThunk())
    } catch (error) {
        console.log(error)
    }

}

const addPurchasesToDup = (stateDup, purchases) => {
    for (let key in purchases) {
        stateDup[key] = purchases[key]
    }
}

// const initialState = {}

export default function purchases(state = {}, action) {
    const stateDup = {...state}
    switch (action.type) {
        case GET_PURCHASES:
            return action.payload;
        case MAKE_PURCHASE:
            addPurchasesToDup(stateDup, action.payload)
            return stateDup
        default:
            return state;
    }
}