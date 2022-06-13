import { connect } from 'react-redux';
import React, { useRef, useEffect } from "react";
import { getUsers, setCurrentUser, getUserByNamePassword } from '../Redux/action';
import { useNavigate } from "react-router-dom";

function mapStateToProps(state) {
    return {
        users: state.userReducer.users,
        currentUser: state.userReducer.currentUser
    }
}

export default connect(mapStateToProps)(function Signin(props) {
    const nameRef = useRef(null)
    const passwordRef = useRef(null)
    const { users, currentUser, dispatch } = props
    let navigate = useNavigate();
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    
    function sendNameAndPassword() {
        let name = nameRef.current.value
        let password = passwordRef.current.value
        if (!name || !password) {
            alert('Missing name / password :(')
        }
        else {
            //בעיקרון אמורים להשתמש בפונקציה הבאה:
            //אבל לא הצלחתי -------------------
            // dispatch(getUserByNamePassword(name,password))
            let user = users.find(x => x.name == name && x.password == password)
            console.log(user);
            if (user) {
                dispatch(setCurrentUser(user))
                return navigate("/");
            }
            else
                return navigate("/signup")
        }
    }
    return (
        <>
            <h1>Log in</h1>
            <input type="text" placeholder="input Name" ref={nameRef}></input>
            <br></br>
            <input type="text" placeholder="input Password" ref={passwordRef}></input>
            <br></br>
            <button onClick={sendNameAndPassword}>sign in</button>
            <br></br>
        </>
    )
})



