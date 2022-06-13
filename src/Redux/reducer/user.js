
import produce from 'immer'
const initialState = {
    users: [],
    currentUser: null
}
export default produce((state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            state.users = action.payload;
            break;
        case 'ADD_USER':
            state.users.push(action.payload)
            break;
        case 'SET_CURRENT_USER':
            debugger
            state.currentUser = action.payload
            console.log(state.currentUser);
            break;
        case 'GET_USER_BY_NAME_PASSWORD':
            state.currentUser = action.payload
            console.log(state.currentUser);
            break;
        default:
    }
}, initialState)