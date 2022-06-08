import "./styles.css";
import Login from "./Login";
import Signup from "./Signup";
import React, { useState } from "react";
import HomePage from "./home";
import { Routes, Route } from "react-router-dom";
import ReciptsPage from './reciptsPage';
import Reci from "./typesOfRecipts";
import ButtonAppBar from './navbar'
import Main from "./mainR";
import RecieptHand from "./recieptHand";
import Previous from "./previous";
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import Reciept from "./recipts";
import "./images/logo.jpg"
import { height } from "@mui/material/node_modules/@mui/system";
<<<<<<< HEAD
import DisplayReceipt from "./displayReceipt";
=======
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234

export default function App() {
  const [nav, setNav] = useState(false)
  const [authType, setAuthType] = useState("login");
  const theme = createTheme({
    direction: 'rtl',
    palette: {
      primary: {
        main: 'rgb(243, 26, 73)'
      }
    }
  });
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <div className="App" sx={{ direction: "rtl" }}>
      {nav && <ButtonAppBar />}
    

     <div></div>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route exact path='/' element={< HomePage/>}></Route>
            <Route exact path='/login' element={< Login nav={nav} setNav={setNav}/>}></Route>
<<<<<<< HEAD
            <Route exact path='/register' element={< Signup nav={nav} setNav={setNav}/>}></Route>
=======
            <Route exact path='/register' element={< Signup  nav={nav} setNav={setNav}/>}></Route>
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
            <Route exact path='/main' element={< Main nav={nav} setNav={setNav} />}></Route>
            <Route exact path='/recipts' element={< ReciptsPage nav={nav} setNav={setNav}/>}></Route>
            <Route exact path='/recipthand' element={< RecieptHand nav={nav} setNav={setNav}/>}></Route>
            <Route exact path='/recipt' element={< Reciept nav={nav} setNav={setNav}/>}></Route>
            <Route exact path='/past' element={< Previous nav={nav} setNav={setNav}/>}></Route>
<<<<<<< HEAD
            <Route exact path='/display' element={< DisplayReceipt nav={nav} setNav={setNav}/>}></Route>
=======
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
            <Route exact path='/reciptsTypes' element={< Reci nav={nav} setNav={setNav}/>}></Route>
          </Routes>
        </ThemeProvider>
      </CacheProvider>
    </div >
  );
}