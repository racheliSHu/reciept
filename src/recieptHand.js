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
import { GridCellEditStopReasons } from '@mui/x-data-grid';

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
        Id: 6,
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
        setNav(true)
    }, [])

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

        axios.post(`https://localhost:44391/api/SaveReceipt`, { receipt: { ...AllReceipt }, products: AllReceipt.products })
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
    const [counter, setCounter] = useState(1);
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const handleClick = () => {
        const newCounter = counter + 1
        setRows((oldRows) => [...oldRows, { id: newCounter, nameProduct: '', amount: '', sumProduct: '' }]);
        // setRows((oldModel) => ({
        //     ...oldModel,
        //     [counter]: { mode: GridRowModes.Edit, fieldToFocus: 'nameProduct' },
        // }));
        setCounter(newCounter)
        // rows.push( { id:newCounter, nameProduct: '', amount: '', sumProduct: '' })
    };
    const handleCellEditCommit = React.useCallback(
        ({ id, field, value }) => {
          
           
            const updatedRows = rows.map((row) => {
              if (row.id === id) {
                return { ...row, [field]:value };
              }
              return row;
            });
            setRows(updatedRows);
          
        },
        [rows],
      );
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
                        <Item sx={{ padding: 20, height: "100vh" }}>
                            <div>
                                <TextField
                                    required
                                    type={'date'}
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
                                    type={'number'}
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
                                        // onCellEditStop={(params, event) => {
                                        //     console.log(params,event)
                                        //     const newRows = [...rows];
                                        //     const index = newRows.findIndex(row => row.id === params.id)
                                        //     newRows[index][params.field] = event.target.value;
                                        //     setRows(newRows)
                                        //     if (params.reason === GridCellEditStopReasons.cellFocusOut) {
                                        //       event.defaultMuiPrevented = true;
                                        //     }
                                        //   }}
                                        onCellEditCommit={handleCellEditCommit}
                                     //   onStateChange = {((state) => setRows(state))}
                                    />

                                    <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
                                        הוספת שורה
                                    </Button>

                                </div>
                                <button id="btn2" onClick={addReceipt}>שמירה</button>
                            </div>
                        </Item>

                    </Box>
                </ThemeProvider>
            </CacheProvider>
        </div >
    );
}