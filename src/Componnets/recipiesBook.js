import React,{useEffect} from "react";
import {connect} from 'react-redux';
import { getRecipies } from "../Redux/action";


function mapStateToProps(state) {
    return {
        currentUser:state.userReducer.currentUser
    }
}

export default connect(mapStateToProps)(function RecipiesBook(props){
    const {currentUser,dispatch} = props
    debugger
    
    return(
    <>
  
        {currentUser && 
        <p>{currentUser.name}</p>}
        <h6>מתכונים</h6>
        {currentUser.recpies && 
        currentUser.recpies.map((recipy)=>{
            return(
                <div key={recipy.id} style={{borderRadius:'2%',width:'20%', height:'100%', margin:'2%', display:'inline-block'}}>
                <p>{recipy.category}</p>
                <h5>{recipy.name}</h5>
                <p>רמה {recipy.level}</p>
                <img src={recipy.img}></img>
                <p>{recipy.like} אהבתי </p>
                </div>
                )
        })
    }
    </>
    )})