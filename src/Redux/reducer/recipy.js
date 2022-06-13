import produce from 'immer'
const initialState = {
    recipies: []
}
export default produce((state, action) => {

    switch (action.type) {
        case 'GET_RECIPIES': {
            debugger
            state.recipies = action.payload;
            break;
        }

        case 'ADD_RECIPY':
            state.recipies.push(action.payload)
            break;
    }
}, initialState)