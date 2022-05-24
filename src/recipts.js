
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { DataGrid } from '@mui/x-data-grid';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import {
    //Box,
    Button,
    ButtonBase,
    //FormControl,
    Input,
    InputAdornment,
    // InputLabel,
    //TextField,
} from "@mui/material";
import { useState, useEffect, useRef } from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
    const { register, handleSubmit, setError } = useForm();
    const dateReceiptRef = useRef('20/02/2022')
    const getColumns = () => {
        return [
            { field: 'nameProduct', headerName: 'שם המוצר', width: 70 },
            { field: 'amount', headerName: 'כמות', width: 70, type: 'number', },
            // { width: 300 },
            { field: 'sumProduct', headerName: ' מחיר סופי', width: 430 },
        ];
    }
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState(getColumns);
    const [AllReceipt, setAllRecipt] = useState({
        id: 1,
        dateReceipt: "",
        nameShop: "",
        numCompany: "",
        totalSum: "",
        myUser: "",
        category: "",

        products: [{ id: 1, key: 1, nameProduct: "לחם", amount: "3", sumProduct: "15" },
        { id: 2, key: 2, nameProduct: "חלב", amount: "2", sumProduct: "10" },
        { id: 3, key: 3, nameProduct: "מילקי", amount: "8", sumProduct: "16" }
        ]
    })
    useEffect(() => {
        async function getResults() {
            // const result = await axios.get("https://localhost:44391/api/getAllReceipt");
            // setRows(result.data);
            setRows(AllReceipt.products);
        }
        getResults()
    }, [])

    async function addReceipt() {
        // setAllRecipt({
        //     dateReceipt: dateReceiptRef.current,
        //     nameShop: "",
        //     numCompany: "",
        //     totalSum: "register.totalSum",
        //     myUser: "",
        //     category: "register.category",
        //     products: [{
        //         nameProduct: "", amount: "", sumProduct: ""
        //     },]
        // });
        //console.log(dateReceiptRef.current.value);
        console.log(AllReceipt);
        axios.post(`https://localhost:44391/api/SaveReceipt`, AllReceipt)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });


    }
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


    const currencies = [
        {
            value: 'food',
            label: 'מזון',
        },
        {
            value: 'cloths',
            label: 'בגוד',
        },
        {
            value: 'shoes',
            label: 'הנעלה',
        },
        {
            value: 'transportation',
            label: 'תחבורה',
        },
        {
            value: 'study pay',
            label: 'שכר לימוד',
        },
        {
            value: 'property tax',
            label: 'ארנונה',
        },

    ];
    const [currency, setCurrency] = React.useState('food');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <div className="stepsWrapper">
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>

                    <Box component="form"
                        sx={{
                            flexGrow: 1,
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off">
                        <Item sx={{ padding: 20, height: "100vh" }}><div>

                            <TextField
                                required
                                id="standard-required"
                                label="תאריך"
                                defaultValue={AllReceipt.dateReceipt}
                                variant="standard"
                                onChange={(e) => setAllRecipt({ ...AllReceipt, dateReceipt: e.target.value })}
                            />
                            <TextField
                                required
                                id="standard-required"
                                label="שם חנות"
                                defaultValue={AllReceipt.nameShop}
                                variant="standard"
                                //{...register("nameShop")}
                                onChange={(e) => setAllRecipt({ ...AllReceipt, nameShop: e.target.value })}
                            />
                            <TextField
                                required
                                id="standard-required"
                                label="עוסק מורשה"
                                defaultValue={AllReceipt.numCompany}
                                variant="standard"
                                onChange={(e) => setAllRecipt({ ...AllReceipt, numCompany: e.target.value })}
                            />
                            <TextField
                                required
                                id="standard-required"
                                label="מחיר סופי"
                                defaultValue={AllReceipt.totalSum}
                                variant="standard"
                                onChange={(e) => setAllRecipt({ ...AllReceipt, totalSum: e.target.value })}
                            />

                            <TextField
                                required
                                id="standard-required"
                                label="שם משתמש"
                                defaultValue={AllReceipt.myUser}
                                variant="standard"
                                onChange={(e) => setAllRecipt({ ...AllReceipt, myUser: e.target.value })}
                            />

                            <TextField
                                required
                                id="standard-select-currency"
                                select
                                label="קטגוריה"
                                type="NativeSelect"
                                //type="outlined"
                                // defaultValue={AllReceipt.category}
                                // value={currency}
                                onChange={handleChange}
                                // helperText="Please select your currency"
                                variant="standard"
                                onChange={(e) => setAllRecipt({ ...AllReceipt, category: e.target.value })}
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}


                                />
                            </div>
                            <Button onClick={addReceipt}>save</Button>

                        </div>
                        </Item>
                    </Box>
                </ThemeProvider>
            </CacheProvider>
        </div >
    );
}

    // async function addReceipt (){

    //     var promise = axios.post("https://localhost:44391/api/SaveReceipt",AllReceipt);
    //     var res = promise;
    //     message = (await res).status;
    //     console.log("success");
    //     // this.setState({});
    //   };

    // appendRow(event) {
    //     var rel = event.target.getAttribute("rel");
    //     rel = parseInt(rel) + 1;
    //     console.log(rel);
    //     var addRow = (
    //       <tr>
    //         <td>
    //           <input type="text" id={`select-type` + rel} />
    //         </td>
    //         <td>
    //           <input type="text" id={`select-position` + rel} />
    //         </td>
    //       </tr>
    //     );
    //     $(".table tbody").append(appRow);
    //   }

    //   render() {
    //     return (