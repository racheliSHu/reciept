import * as React from 'react';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import { Box, TextField, Button, MenuItem, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { GridRowModes } from '@mui/x-data-grid-pro';
import { useState, useEffect, useRef } from "react";
import "./styles.css";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function Reciept({ AllReceipt }) {
    const dateReceiptRef = useRef('20/02/2022');
    const getColumns = () => {
        return [

            { field: 'nameProduct', headerName: 'שם המוצר', width: 150, editable: true, },
            { field: 'amount', headerName: 'כמות', width: 120, type: 'number', editable: true, },
            { field: 'sumProduct', headerName: ' מחיר סופי', width: 120, type: 'number', editable: true, },
        ];
    }
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState(getColumns);
    const [AllReceiptState, setAllReceiptState] = useState({})


    useEffect(async () => {
        console.log(AllReceipt);
        console.log(AllReceipt.products);
        console.log(AllReceipt.receipt);

        if (AllReceipt.products) {
            setRows(AllReceipt.products.map((p, index) => ({ ...p, id: index })));
            setAllReceiptState({ ...AllReceipt, receipt: { ...AllReceipt.receipt } });
        }

    }, [AllReceipt])

    async function addReceipt() {
        console.log(AllReceiptState);
        axios.post(`https://localhost:44391/api/SaveReceipt`, AllReceiptState)
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
            value: 1,
            label: 'מזון',
        },
        {
            value: 2,
            label: 'בגוד והנעלה',
        },
        {
            value: 3,
            label: 'רכב ותחבורה',
        },
        {
            value: 4,
            label: 'מיסים ותשלומים',
        },
        {
            value: 5,
            label: 'תרבות ופנאי',
        },
        {
            value: 6,
            label: 'בריאות',
        },
        {
            value: 7,
            label: 'מוצרי חשמל ותקשורת',
        },

        {
            value: 8,
            label: 'כלי בית',
        },
        {
            value: 9,
            label: 'שונות',
        },


    ];
    const [currency, setCurrency] = React.useState('food');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const handleClick = () => {
        const id = randomId();
        rows((oldRows) => [...oldRows, { id, nameProduct: '', amount: '', sumProduct: '' }]);
        setRows((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'nameProduct' },
        }));
    };

    return (
      
            <div className="stepsWrapper" sx={{ "marginRight": "0", }}>
                <CacheProvider value={cacheRtl}>
                    <ThemeProvider theme={theme}>
                        {AllReceiptState && AllReceiptState.receipt && <Box component="form"
                            sx={{
                                width: "40vw",
                                height:"100vh",
                                marginRight: "0",
                                flexGrow: 1,
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off">
                            <Item sx={{ paddingTop: 20, paddingRight: 5, height: "100vh" }}><div>
                                <TextField
                                    required
                                    id="standard-required"
                                    label="תאריך"
                                    value={AllReceiptState.receipt.dateReceipt}
                                    variant="standard"
                                    onChange={(e) => setAllReceiptState({ ...AllReceiptState, receipt: { ...AllReceiptState.receipt, dateReceipt: e.target.value } })}
                                />
                                <TextField
                                    required
                                    id="standard-required"
                                    label="שם חנות"
                                    value={AllReceiptState.receipt.nameShop}
                                    variant="standard"
                                    onChange={(e) => setAllReceiptState({ ...AllReceiptState, receipt: { ...AllReceiptState.receipt, nameShop: e.target.value } })}
                                />
                                <TextField
                                    required
                                    id="standard-required"
                                    label="עוסק מורשה"
                                    value={AllReceiptState.receipt.numCompany}
                                    variant="standard"
                                    onChange={(e) => setAllReceiptState({ ...AllReceiptState, receipt: { ...AllReceiptState.receipt, numCompany: e.target.value } })}
                                />
                                <TextField
                                    required
                                    id="standard-required"
                                    label="מחיר סופי"
                                    value={AllReceiptState.receipt.totalSum}
                                    variant="standard"
                                    onChange={(e) => setAllReceiptState({ ...AllReceiptState, receipt: { ...AllReceiptState.receipt, totalSum: e.target.value } })}
                                />
                                <TextField
                                    required
                                    id="standard-required"
                                    label="שם משתמש"
                                    value={AllReceiptState.myUser}
                                    variant="standard"
                                    onChange={(e) => setAllReceiptState({ ...AllReceiptState, receipt: { ...AllReceiptState.receipt, myUser: e.target.value }} )}
                                />
                                <TextField
                                    required
                                    id="standard-select-currency"
                                    select
                                    label="קטגוריה"
                                    type="NativeSelect"
                                    // value={currency}
                                    // onChange={handleChange}
                                    variant="standard"
                                    value={AllReceiptState.receipt.category}
                                    onChange={(e) => setAllReceiptState({ ...AllReceiptState, receipt: { ...AllReceiptState.receipt, category: e.target.value } })}
                                >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <div style={{ height: '70vh', width: '35vw',margin:"auto" }}>
                                    {rows && <DataGrid

                                        rows={rows}
                                        columns={columns}
                                        experimentalFeatures={{ newEditingApi: true }}
                                    />}
                                  
                                </div>

                            </div>
                            </Item>
  <button id="btn2" onClick={addReceipt}>שמירה</button>

                        </Box>}
                    </ThemeProvider>
                </CacheProvider>
            </div >
    );
}