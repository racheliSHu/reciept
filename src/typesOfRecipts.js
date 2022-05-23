// import React, { Component } from "react";
import "./styles.css";
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider } from "@material-ui/core/styles";
// createTheme
import axios from 'axios';
import { useState, useEffect, useRef } from "react";
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
export default function Reci() {
  useEffect(() => {
    async function getResults() {
        //  const result = await axios.get("https://localhost:44391/api/Category");
        //  console.log(result.data);
        // setRows(AllReceipt.products);
    }
    getResults()
}, [])
  // let getMuiTheme = () =>
  //   createTheme({
  //     overrides: {
  //       MUIDataTableBodyCell: {
  //         root: {
  //           backgroundColor: "#FF0000",
  //         },
  //       },
  //       MUIDataTablePagination: {
  //         root: {
  //           backgroundColor: "#000",
  //           color: "#fff",
  //         },
  //       },
  //     },
  //   });

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
  const columns = ["...","סכום", "שם"];

  const data = [
    ["530", "ביגוד"],
    ["2000.5", "מזון"],
    [ "500","רכב"],
    [ "1000","לימודים"],
  ];

  const options = {
    filterType: "checkbox",
    rowsPerPage: [7],
    rowsPerPageOptions: [1, 3, 5, 6, 7, 10],
    jumpToPage: true,
    textLabels: {
      pagination: {
        next: "Next >",
        previous: "< Previous",
        rowsPerPage: "Total items Per Page",
        displayRows: "OF",
        require:"true",
        data:"typeof(number)"
      },
    },
    onChangePage(currentPage) {
      console.log({ currentPage });
    },
    onChangeRowsPerPage(numberOfRows) {
      console.log({ numberOfRows });
    },
  };
 
  return (
    <div>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <h1 >סוגי הוצאות</h1>
          {/* <MuiThemeProvider theme={this.getMuiTheme()}> */}
          <MUIDataTable
            // title={"הוצאות כללי"}
            data={data}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      </CacheProvider>
      {/* </MuiThemeProvider> */}
    </div>
  );
}