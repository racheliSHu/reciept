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
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';


export default function App() {
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

      <ButtonAppBar/>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </CacheProvider>
    </div >
  );
}