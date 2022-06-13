// import React from "react";
import react, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, setCurrentUser } from "../Redux/action";
import { useNavigate } from "react-router-dom";
export default function Signup() {
    const nameRef = useRef(null)
    var isExsistPassword = 0;
    const passwordRef = useRef(null)
    const verRef = useRef(null)
    const adressRef = useRef(null)
    const emailRef = useRef(null)
    const [pass, setPass] = useState('');
    let navigate = useNavigate()

    let dispatch = useDispatch()
    function changePass(newPass) {
        setPass(newPass);
    }
    function verifyPassword() {
        let pass = passwordRef.current.value;
        console.log(pass);
        let verPass = verRef.current.value;
        if (pass != verPass)
            changePass('אימות סיסמא נכשל')
        else {
            changePass('')
            isExsistPassword = 1
        }
    }
    function login() {
        debugger
        if (nameRef.current.value && isExsistPassword || verRef.current.value&& emailRef.current.value) {
            var newUser = {
                "name": nameRef.current.value,
                "password": passwordRef.current.value,
                "adress": adressRef.current.value,
                "email": emailRef.current.value
            }
            dispatch(addUser(newUser))
            dispatch(setCurrentUser(newUser))
            return navigate('/')
        }
        else
            alert('Missing name / password :(')
    }

    return (
        <>
            <form name="formSignup">
                <input type="text" placeholder="הכנס שם " ref={nameRef}></input>
                <br></br>
                <input type="password" placeholder="הכנס סיסמא " ref={passwordRef}></input>
                <br></br>
                <input type="password" placeholder="אימות סיסמא " ref={verRef} onChange={verifyPassword}></input>
                {pass && <label><br></br>{pass}</label>}
                <br></br>
                <input type="text" placeholder="הכנס כתובת " ref={adressRef}></input>
                <br></br>
                <input type="email" placeholder='הכנס דוא"ל' ref={emailRef}></input>
                <br></br>
                <button type="submit" onClick={login}>התחבר</button>
            </form>

        </>
    )
}