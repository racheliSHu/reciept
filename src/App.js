import "./styles.css";
import Login from "./Login";
import Signup from "./Signup";
import React, { useState } from "react";
import HomePage from "./home";
import { Routes, Route } from "react-router-dom";
import ReciptsPage from './reciptsPage';
// import FullFeaturedCrudGrid from "./gridrow";
import  Reci  from "./typesOfRecipts";
import ButtonAppBar from './navbar'
import CheckboxesTags from './selecttag'


export default function App() {
  const [authType, setAuthType] = useState("login");

  return (
    <div className="App">

      {/* <Reci/> */}
      {/* <FullFeaturedCrudGrid/> */}
      {/* <ButtonAppBar/>
      <CheckboxesTags/> */}
      <Routes>
        <Route exact path='/' element={< HomePage />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/register' element={< Signup />}></Route>
        <Route exact path='/recipts' element={< ReciptsPage />}></Route>
        <Route exact path='/reciptsTypes' element={< Reci />}></Route>
      </Routes>

    </div>
  );
}





