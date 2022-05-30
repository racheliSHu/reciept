
import PdfImg from './pdf-img';
import ColumnsGrid from './recipts';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function ReciptsPage() {
    const [reciepts,setReciepts] = useState({
        Id: 5,
        dateReceipt: "2021-03-05T00:00:00",
        nameShop: "nativ",
        numCompany: "1111",
        totalSum: 234.0,
        myUser: "2",
        category: 1,
        path: null
    });
    let navigate = useNavigate()
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
        < div className="splitScreen" >
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <div id="leftPane" sx={{padding:"50vh"}}><PdfImg setReciepts={(value) => setReciepts(value)}/></div>
                    <div id="rightPane"><ColumnsGrid AllReceipt ={reciepts}/></div>
                
                </ThemeProvider>
            </CacheProvider>
        </div >)
}