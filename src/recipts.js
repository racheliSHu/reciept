// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import axios from 'axios';
// import { useForm } from "react-hook-form";
// import {
//     DataGrid, GridCellEditStopParams,
//     GridCellEditStopReasons,
//     MuiEvent,
// } from '@mui/x-data-grid';
// import createCache from '@emotion/cache';
// import { CacheProvider } from '@emotion/react';
// import rtlPlugin from 'stylis-plugin-rtl';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { prefixer } from 'stylis';


// import {
//     Box,
//     Button,
//     ButtonBase,
//     FormControl,
//     Input,
//     InputAdornment,
//     InputLabel,
//     TextField,
// } from "@mui/material";
// import { useState, useEffect } from "react";

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

// export default function ColumnsGrid() {
//     const { register, handleSubmit, setError } = useForm();

//     const getColumns = () => {
//         return [
//             { field: 'nameProduct', headerName: 'שם המוצר', width: 70 },
//             { field: 'amount', headerName: 'כמות', width: 70, type: 'number', },
//             // { width: 300 },
//             { field: 'sumProduct', headerName: ' מחיר סופי', width: 430 },
//         ];
//     }
//     const [rows, setRows] = useState([]);
//     const [columns, setColumns] = useState(getColumns);
//     const [AllReceipt, setAllRecipt] = useState({
//         id: 1,
//         dateReceipt: "",
//         nameShop: "",
//         numCompany: "",
//         totalSum: "",
//         myUser: "",
//         category: "",

//         products: [{
//             id: 1, key: 1, nameProduct: "לחם", amount: "3", sumProduct: "15", editable: true,
//         },
//         {
//             id: 2, key: 2, nameProduct: "חלב", amount: "2", sumProduct: "10", editable: true,
//         },
//         {
//             id: 3, key: 3, nameProduct: "מילקי", amount: "8", sumProduct: "16", editable: true,
//         }
//         ]
//     })
//     useEffect(() => {
//         async function getResults() {
//             //  const result = await axios.get("https://localhost:44391/api/SaveReceipt");
//             // setRows(result.data);
//             setRows(AllReceipt.products);
//         }
//         getResults()
//     }, [])

//     async function addReceipt() {
//         setAllRecipt({
//             // dateReceipt: 
//             // nameShop: "register.nameShop",
//             // numCompany: "register.numCompany",
//             // totalSum: "register.totalSum",
//             // myUser: "",
//             // category: "register.category",
//             // products: [{
//             //     nameProduct: "", amount: "", sumProduct: ""
//             // },]
//         });
//         console.log(AllReceipt);
//         axios.post(`https://localhost:44391/api/SaveReceipt`, AllReceipt)
//             .then(res => {
//                 console.log(res);
//                 console.log(res.data);
//             });


//     }
//     const dateReceiptRef = React.createRef();
//     const nameShopRef = React.createRef();
//     const numCompanyRef = React.createRef();
//     const totalSumRef = React.createRef();
//     const categoryRef = React.createRef();




//     const submit = () => {

//         setAllRecipt({ dateReceipt: dateReceiptRef.current.value, nameShop: nameShopRef.current.value, numCompany: numCompanyRef.current.value })

//     }
//     const theme = createTheme({
//         direction: 'rtl',
//         palette: {
//             primary: {
//                 main: 'rgb(243, 26, 73)'
//             }
//         }
//     });
//     const cacheRtl = createCache({
//         key: 'muirtl',
//         stylisPlugins: [prefixer, rtlPlugin],
//     });
//     return (
//         <div className="stepsWrapper">
//             <CacheProvider value={cacheRtl}>
//                 <ThemeProvider theme={theme}>

//                     <Box component="form"
//                         sx={{
//                             flexGrow: 1,
//                             '& .MuiTextField-root': { m: 1, width: '25ch' },
//                         }}
//                         noValidate
//                         autoComplete="off">
//                         <Item sx={{ padding: 20, height: "100vh" }}><div>

//                             <TextField
//                                 required
//                                 id="standard-required"
//                                 label="תאריך"
//                                 defaultValue={AllReceipt.dateReceipt}
//                                 variant="standard"
//                             />
//                             <TextField
//                                 required
//                                 id="standard-required"
//                                 label="שם חנות"
//                                 defaultValue={AllReceipt.nameShop}
//                                 variant="standard"
//                             // {...register("nameShop")}
//                             />
//                             <TextField
//                                 required
//                                 id="standard-required"
//                                 label="עוסק מורשה"
//                                 defaultValue={AllReceipt.numCompany}
//                                 variant="standard"
//                             // ref
//                             // {...register("numCompany")}
//                             />
//                             <TextField
//                                 required
//                                 id="standard-required"
//                                 label="מחיר סופי"
//                                 defaultValue={AllReceipt.totalSum}
//                                 variant="standard"
//                             // {...register("totalSum")}
//                             />

//                             <TextField
//                                 required
//                                 id="standard-required"
//                                 label="שם משתמש"
//                                 defaultValue={AllReceipt.myUser}
//                                 variant="standard"
//                             // {...register("myUser")}
//                             />
//                             <TextField
//                                 required
//                                 id="standard-required"
//                                 label="קטגוריה"
//                                 // type=""
//                                 defaultValue={AllReceipt.category}
//                                 variant="standard"
//                             // {...register("category")}
//                             />
//                             <div style={{ height: 400, width: '100%' }}>
//                                 {/* <DataGrid
//                                     rows={rows}
//                                     columns={columns}
//                                     editable={true}

//                                 /> */}
//                                 <DataGrid
//                                     rows={rows}
//                                     columns={columns}
//                                     experimentalFeatures={{ newEditingApi: true }}
//                                     // onCellEditStop={(params: GridCellEditStopParams, event: MuiEvent) => {
//                                     //     if (params.reason === GridCellEditStopReasons.cellFocusOut) {
//                                     //         event.defaultMuiPrevented = true;
//                                     //     }
//                                     // }}
//                                 />
//                             </div>
//                             <Button onClick={addReceipt}>save</Button>

//                         </div>
//                         </Item>
//                     </Box>
//                 </ThemeProvider>
//             </CacheProvider>
//         </div>
//     );
// }

//     // async function addReceipt (){

//     //     var promise = axios.post("https://localhost:44391/api/SaveReceipt",AllReceipt);
//     //     var res = promise;
//     //     message = (await res).status;
//     //     console.log("success");
//     //     // this.setState({});
//     //   };
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


import {
    Box,
    Button,
    ButtonBase,
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    TextField,
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
                                id="standard-required"
                                label="קטגוריה"
                                // type=""
                                defaultValue={AllReceipt.category}
                                variant="standard"
                                onChange={(e) => setAllRecipt({ ...AllReceipt, category: e.target.value })}
                            />
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
        </div>
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