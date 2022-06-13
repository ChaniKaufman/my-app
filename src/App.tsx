import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import DisplayUsers from './Componnets/displayUsers'
import MainMenu from './Componnets/mainMenu';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import DisplayAllRecipies from './Componnets/displayAllRecipies';
import Signin from './Componnets/signin';
import Signup from './Componnets/signup';
import About from './Componnets/about';
import Profile from './Componnets/profile';
import RecipiesBook from './Componnets/recipiesBook';
// import Profile from './Componnets/profile';
// import RecipiesBook from './Componnets/recipiesBook';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
       
          <MainMenu></MainMenu>
          <Routes>
            {/* <Route path="" element={<MainMenu />}></Route> */}
            <Route path="/displayUsers" element={<DisplayUsers />}></Route>
            <Route path="" element={<DisplayAllRecipies />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signout" element={<DisplayAllRecipies />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/recipiesBook" element={<RecipiesBook/>}></Route>
          </Routes>

        </BrowserRouter>
      </Provider>

    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  )
}

export default App;
