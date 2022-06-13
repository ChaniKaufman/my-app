import React,{useEffect} from "react";
import {connect} from 'react-redux';
import { getRecipies } from "../Redux/action";
import img1 from '../Images/גלידת מעדן חלב תמונה.png'
import img2 from '../Images/מאפינס זיתים תמונה.png'
import img3 from '../Images/מתכון למגדרה תמונה.png'
import img4 from '../Images/סלט בורגול עם בטטה תמונה.png'
import img5 from '../Images/סלט קיסר תמונה.png'
import img6 from '../Images/עוגיות כדורי שלג תמונה.png'
import img7 from '../Images/עוגת תפוזים בחושה ללא גלוטן תמונה.png'
import img8 from '../Images/פיתות במחבת תמונה.png'
import img9 from '../Images/תפוחי אדמה מעוכים תמונה.png'


function mapStateToProps(state) {
    return {
        recipies: state.recipyReducer.recipies,
        currentUser:state.userReducer.currentUser
    }
}

export default connect(mapStateToProps)(function DisplayAllRecipies(props) {
    const {recipies,currentUser,dispatch} = props
    
    useEffect(async()=>{
      await  dispatch(getRecipies())
    },[])
    return(
        <>
        {currentUser && 
        <p>{currentUser.name}</p>}
        <h6>מתכונים</h6>
        {recipies && 
        recipies.map((recipy)=>{
            return(
                <div key={recipy.id} style={{borderRadius:'2%',width:'20%', height:'100%', margin:'2%', display:'inline-block'}}>
                <p>{recipy.category}</p>
                <h5>{recipy.name}</h5>
                <p>רמה {recipy.level}</p>
                <img src={recipy.img}></img>
                <p>{recipy.like} אהבתי </p>
                </div>
                )
        })}
        <div className="row" style={{width:'80%', margin:'auto'}}>
        <img src={img1} style={{height:'25%',width:'25%', overflow:'auto', margin:'auto'}}></img>
        <img src={img2} style={{height:'25%',width:'25%', overflow:'auto', margin:'auto'}}></img>
        <img src={img3} style={{height:'25%',width:'25%', overflow:'auto', margin:'auto'}}></img>
        <img src={img4} style={{height:'25%',width:'25%', overflow:'auto', margin:'auto'}}></img>
        <img src={img5} style={{height:'25%',width:'25%', overflow:'auto', margin:'auto'}}></img>
        <img src={img6} style={{height:'25%',width:'25%', overflow:'auto', margin:'auto'}}></img>
        <img src={img7} style={{height:'25%',width:'25%', overflow:'auto', margin:'auto'}}></img>
        <img src={img8} style={{height:'25%',width:'25%', overflow:'auto', margin:'auto'}}></img>
        <img src={img9} style={{height:'25%',width:'25%', overflow:'auto', margin:'auto'}}></img>
        </div>
        </>
    )
})