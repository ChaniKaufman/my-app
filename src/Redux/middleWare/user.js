import { act } from "@testing-library/react";
import axios from "axios";
// import { nextTick } from "process";
const URL = `http://localhost:2990/user/`
// export const addUser=(user)=>{
//     return axios.post(`${URL}addUser`,user).
//     then((res)=>{
//         if(res && res.data)
//            return res.data;
//     }).catch((err)=>{
//         console.log(err);
//     })
// }
// export const getUsers=()=>{
//     return axios.get(`${URL}getUsers`).
//     then((res)=>{
//         if(res && res.data && res.data.users)
//            return res.data.users;
//     }).catch((err)=>{
//         console.log(err);
//     })
// }
export const UserMiddlerware = ({ dispatch, getState }) => next => action => {
    if (action.type == 'GET_USERS') {
        const usersList = async () => {
            const users = await axios.get(`${URL}getUsers`);
            action.payload = users.data;
            return next(action);
        }
        usersList();
    }
    if (action.type == 'ADD_USER') {
        const addUser = async () => {
            debugger
            const users = await axios.post(`${URL}addUser`, action.payload);
            action.payload = users.data;
            return next(action);
        }
        addUser();
    }
    if (action.type == 'SET_CURRENT_USER') {
        return next(action);
    }
    if (action.type == 'GET_USER_BY_NAME_PASSWORD') {

        const getUserByNamePassword = async () => {
            const user = await axios.get(`${URL}getUserByNamePassword?name=${action.payload}&password=${action.password}`);
            action.payload = user.data;
            return next(action);
        }
        getUserByNamePassword();
    }

}
