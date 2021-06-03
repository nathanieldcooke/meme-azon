const GET_MEMES = 'memes/GET_MEMES';

const getMemes = (memes) => ({
    type: GET_MEMES,
    payload: memes
})

export const getMemesThunk = () => async (dispatch) => {
    const res = await fetch('/api/memes/')

    try {
        if (!res.ok) throw res
        const memes = await res.json();
        dispatch(getMemes(memes));
    } catch (error) {
        console.log(error)
    }

}

// const initialState = {}

export default function memes(state = {}, action) {
    switch (action.type) {
        case GET_MEMES:
            return action.payload;
        default:
            return state;
    }
}