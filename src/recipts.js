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
<<<<<<< HEAD
import "./styles.css";
=======
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function Reciept({ AllReceipt }) {
<<<<<<< HEAD
    const dateReceiptRef = useRef('20/02/2022');
    const getColumns = () => {
        return [
           
=======
    const dateReceiptRef = useRef('20/02/2022')
    const getColumns = () => {
        return [
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
            { field: 'nameProduct', headerName: 'שם המוצר', width: 70, editable: true, },
            { field: 'amount', headerName: 'כמות', width: 70, type: 'number', editable: true, },
            { field: 'sumProduct', headerName: ' מחיר סופי', width: 70, type: 'number', editable: true, },
        ];
    }
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState(getColumns);
<<<<<<< HEAD
    const [AllReceiptState, setAllReceiptState] = useState({})


    useEffect(async () => {
        // const result = await axios.get("https://localhost:44391/api/getAllReceiptState");
        // setRows(result.data);

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
=======

    useEffect(() => {
        async function getResults() {
            // const result = await axios.get("https://localhost:44391/api/getAllReceipt");
            // setRows(result.data);
            setRows(AllReceipt.products);
        }
        getResults()
    }, [AllReceipt])

    async function addReceipt() {
        console.log(AllReceipt);
        axios.post(`https://localhost:44391/api/SaveReceipt`, AllReceipt)
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
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
<<<<<<< HEAD
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


=======
            value: 'food',
            label: 'מזון',
        },
        {
            value: 'cloths',
            label: 'בגוד והנעלה',
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

>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
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
        <div className="stepsWrapper">
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
<<<<<<< HEAD
                    {AllReceiptState && AllReceiptState.receipt && <Box component="form"
=======
                    <Box component="form"
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
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
<<<<<<< HEAD
                                value={AllReceiptState.receipt.dateReceipt}
                                variant="standard"
                                onChange={(e) => setAllReceiptState({ ...AllReceiptState, receipt: { ...AllReceiptState.receipt, dateReceipt: e.target.value } })}
=======
                                defaultValue={AllReceipt.dateReceipt}
                                variant="standard"
                                onChange={(e) => setAllRecipt({ ...AllReceipt, dateReceipt: e.target.value })}
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
                            />
                            <TextField
                                required
                                id="standard-required"
                                label="שם חנות"
<<<<<<< HEAD
                                value={AllReceiptState.receipt.nameShop}
                                variant="standard"
                                onChange={(e) => setAllReceiptState({ ...AllReceiptState, receipt: { ...AllReceiptState.receipt, nameShop: e.target.value } })}
=======
                                defaultValue={AllReceipt.nameShop}
                                variant="standard"
                                onChange={(e) => setAllRecipt({ ...AllReceipt, nameShop: e.target.value })}
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
                            />
                            <TextField
                                required
                                id="standard-required"
                                label="עוסק מורשה"
<<<<<<< HEAD
                                value={AllReceiptState.receipt.numCompany}
                                variant="standard"
                                onChange={(e) => setAllReceiptState({ ...AllReceiptState, receipt: { ...AllReceiptState.receipt, numCompany: e.target.value } })}
=======
                                defaultValue={AllReceipt.numCompany}
                                variant="standard"
                                onChange={(e) => setAllRecipt({ ...AllReceipt, numCompany: e.target.value })}
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
                            />
                            <TextField
                                required
                                id="standard-required"
                                label="מחיר סופי"
<<<<<<< HEAD
                                value={AllReceiptState.receipt.totalSum}
                                variant="standard"
                                onChange={(e) => setAllReceiptState({ ...AllReceiptState, receipt: { ...AllReceiptState.receipt, totalSum: e.target.value } })}
=======
                                defaultValue={AllReceipt.totalSum}
                                variant="standard"
                                onChange={(e) => setAllRecipt({ ...AllReceipt, totalSum: e.target.value })}
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
                            />
                            <TextField
                                required
                                id="standard-required"
                                label="שם משתמש"
<<<<<<< HEAD
                                value={AllReceiptState.myUser}
                                variant="standard"
                                onChange={(e) => setAllReceiptState({ ...AllReceiptState, myUser: e.target.value })}
=======
                                defaultValue={AllReceipt.myUser}
                                variant="standard"
                                onChange={(e) => setAllRecipt({ ...AllReceipt, myUser: e.target.value })}
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
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
<<<<<<< HEAD
                                value={AllReceiptState.receipt.category}
                                onChange={(e) => setAllReceiptState({ ...AllReceiptState, receipt: { ...AllReceiptState.receipt, category: e.target.value } })}
=======
                                onChange={(e) => setAllRecipt({ ...AllReceipt, category: e.target.value })}
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
<<<<<<< HEAD
                            <div style={{ height: 200, width: '100%' }}>
=======
                            <div style={{ height: 400, width: '100%' }}>
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
                                {rows && <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    experimentalFeatures={{ newEditingApi: true }}
                                />}
<<<<<<< HEAD
                            </div>
                            <button id="btn2" onClick={addReceipt}>שמירה</button>
                        </div>
                        </Item>


                    </Box>}
=======
                                <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
                                    הוספת שורה
                                </Button>
                            </div>
                        </div>
                        </Item>
                        <Button onClick={addReceipt}>save</Button>
                    </Box>
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
                </ThemeProvider>
            </CacheProvider>
        </div >
    );
}