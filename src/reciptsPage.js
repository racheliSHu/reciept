
import PdfImg from './pdf-img';
import ColumnsGrid from './recipts';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
export default function ReciptsPage() {
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
                    <div id="leftPane" sx={{padding:"50vh"}}><PdfImg /></div>
                    <div id="rightPane"><ColumnsGrid /></div>
                </ThemeProvider>
            </CacheProvider>
        </div >)
}