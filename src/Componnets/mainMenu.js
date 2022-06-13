import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setCurrentUser } from "../Redux/action";

function mapStateToProps(state) {
    return {
        currentUser: state.userReducer.currentUser
    }
}

export default connect(mapStateToProps)(function MainMenu(props) {
    const {currentUser, dispatch } = props
    function signOut()
    {
        dispatch(setCurrentUser(null))
    }
    return (
        <>
         <nav className='navbar navbar-expand-sm bg-light'>
            <div className='container-fluid'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to="/displayUsers">משתמשים</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/">דף הבית</Link>
                    </li>
                   {!currentUser && <li className='nav-item'>
                        <Link to="/signin">התחברות</Link>
                    </li >}
                    {!currentUser &&<li className='nav-item'>
                        <Link to="/signup">הרשמה</Link>
                    </li>}
                    {currentUser &&<li className='nav-item'>
                        <Link to="/profile">פרופיל</Link>
                    </li>}
                    {currentUser &&<li className='nav-item'>
                        <Link to="/recipiesBook">אזור אישי</Link>
                    </li>}
                    <li className='nav-item'>
                        <Link to="/about">אודות</Link>
                    </li>
                    {currentUser &&<li className='nav-item'>
                        <Link to="/" onClick={signOut}>התנתקות</Link>
                    </li>}

                </ul>
                
            </div>
            </nav>
        </>
    )
})