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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
// export default function RecieptHand({ AllReceipt }) {
export default function RecieptHand({ nav, setNav }) {
    const [AllReceipt, setAllRecipt] = useState({
        Id: 5,
        dateReceipt: "",
        nameShop: "",
        numCompany: "",
        totalSum: "",
        myUser: "",
        category: "",
        path: null,
        products: [{ id: "", nameProduct: '', amount: '', sumProduct: '' }]
    });
    const dateReceiptRef = useRef('20/02/2022')
    const getColumns = () => {
        return [
            { field: 'nameProduct', headerName: 'שם המוצר', width: 70, editable: true, },
            { field: 'amount', headerName: 'כמות', width: 70, type: 'number', editable: true, },
            { field: 'sumProduct', headerName: ' מחיר סופי', width: 70, type: 'number', editable: true, },
        ];
    }
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState(getColumns);
   
    useEffect(() => {
        async function getResults() {
            // const result = await axios.get("https://localhost:44391/api/getAllReceipt");
            // setRows(result.data);
            setRows(AllReceipt.products);
        }
        getResults()
    }, [AllReceipt], setNav(true))

    async function addReceipt() {
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
                                // value={currency}
                                // onChange={handleChange}
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
                                    experimentalFeatures={{ newEditingApi: true }}
                                />
                                <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
                                    הוספת שורה
                                </Button>
                            </div>
                        </div>
                        </Item>
                        <Button onClick={addReceipt}>save</Button>
                    </Box>
                </ThemeProvider>
            </CacheProvider>
        </div >
    );
}