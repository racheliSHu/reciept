
import PdfImg from './pdf-img';
import ColumnsGrid from './recipts';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Reciept from './recipts';
import ButtonAppBar from './navbar';
export default function ReciptsPage({ nav, setNav }) {
    const [reciepts, setReciepts] = useState({});

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
    useEffect(() => {
        setNav(true)
    },[])
    return (
        < div className="splitScreen">
             <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <div id="leftPane" sx={{ padding: "50vh" }}><PdfImg setReciepts={(value) => setReciepts(value)} /></div>
                    <div id="rightPane"><Reciept AllReceipt={reciepts} /></div>
                </ThemeProvider>
            </CacheProvider>
        </div >)
}