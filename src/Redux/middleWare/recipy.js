import axios from "axios";
const URL = `http://localhost:2990/recipy/`
export const RecipyMiddlerware = ({ dispatch, getState }) => next => action => {
    
    if (action.type == 'GET_RECIPIES') {
        const getRecipies = async () => {
            debugger
            const recipies = await axios.get(`${URL}getRecipies`);
            action.payload = recipies.data;
            return next(action);
        }
        getRecipies();
    }
    if (action.type == 'ADD_RECIPY') {
        const addRecipy = async () => {
            const recipies = await axios.post(`${URL}addRecipy`,action.payload);
            action.payload = recipies.data;
            return next(action);
        }
        addRecipy();
    }
    return next(action);
}

