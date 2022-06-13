import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainMenu } from "./mainMenu";
import { DisplayUsers } from "./displayUsers";
import { DisplayAllRecipies } from "./displayAllRecipies";
import Signin from "./signin";
import Signup from "./signup";
import About from "./about";
export default function MyRouter() {
    return (
        <>
            {/* <BrowserRouter>
                <Routes>
                    <Route path="" element={<MainMenu />}></Route>
                    <Route path="/displayUsers" element={<DisplayUsers />}></Route>
                    <Route path="/displayAllRecipies" element={<DisplayAllRecipies />}></Route>
                    <Route path="/signin" element={<Signin />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
            </BrowserRouter> */}
        </>
    )
}
