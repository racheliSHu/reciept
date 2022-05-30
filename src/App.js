import "./styles.css";
import Login from "./Login";
import Signup from "./Signup";
import React, { useState } from "react";
import HomePage from "./home";
import { Routes, Route } from "react-router-dom";
import ReciptsPage from './reciptsPage';
import FullFeaturedCrudGrid from "./gridrow";
import Reci from "./typesOfRecipts";
import ButtonAppBar from './navbar'
import Main from "./mainR";
import ColumnsGrid from "./recipts";
import Previous from "./previous";
// import CheckboxesTags from './selecttag'


export default function App() {
  const [authType, setAuthType] = useState("login");

  return (
    <div className="App">
      {/* <Reci/> */}
      {/* <FullFeaturedCrudGrid/> */}
      {/* <ButtonAppBar/>
      <CheckboxesTags/> */}
      <ButtonAppBar />
      <Routes>

        <Route exact path='/' element={< HomePage />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/register' element={< Signup />}></Route>
        <Route exact path='/main' element={< Main />}></Route>
        <Route exact path='/recipts' element={< ReciptsPage />}></Route>
        <Route exact path='/recipt' element={< ColumnsGrid />}></Route> 
        <Route exact path='/past' element={< Previous />}></Route>
        <Route exact path='/reciptsTypes' element={< Reci />}></Route>

      </Routes>

    </div >
  );
}