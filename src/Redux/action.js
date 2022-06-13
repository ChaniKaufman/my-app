export function getUsers(users) {
    if (users == null)
        return { type: 'GET_USERS', payload: null }
    return { type: 'GET_USERS', payload: users }
}
export function addUser(user) {
    if (user == null)
        return { type: 'ADD_USER', payload: null }
    return { type: 'ADD_USER', payload: user }
}

export function getRecipies(recipies) {
    
    if (recipies == null)
        return { type: 'GET_RECIPIES', payload: null }
    return { type: 'GET_RECIPIES', payload: recipies }
}
export function addRecipy(recipy) {
    if (recipy == null)
        return { type: 'ADD_RECIPY', payload: null }
    return { type: 'ADD_RECIPY', payload: recipy }
}
export function setCurrentUser(user){
    debugger
    return {type:'SET_CURRENT_USER',payload:user}
}
export function getUserByNamePassword(name,password){
    debugger
    return {type:'GET_USER_BY_NAME_PASSWORD',payload:name,password}
}
