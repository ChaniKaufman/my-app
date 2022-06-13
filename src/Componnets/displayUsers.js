import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from 'react-redux';
import { getUsers } from "../Redux/action";

function mapStateToProps(state) {
    return {
        users: state.userReducer.users
    }
}
export default connect(mapStateToProps)(function DisplayUsers(props) {
    const {users,dispatch} = props
    useEffect(()=>{
        dispatch(getUsers())
    },[])
    return(
        <>
        <h5>משתמשים</h5>
        {users && 
        users.map((user)=>{
            return(
                <div key={user.id} style={{width:'200px', height:'200px', margin:'2%', display:'inline-block'}}>
                <p>Name: {user.name}</p>
                <p>Adress: {user.adress}</p>
                </div>
                )
        })}
        </>
    )
})
