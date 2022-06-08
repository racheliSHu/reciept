import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from 'react-router-dom'

export default function ButtonAppBar() {
  let navigate=useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
<<<<<<< HEAD
            sx={{ mr: 2 ,  paddingBottom: "10px"}}
=======
            sx={{ mr: 2 ,  "padding-bottom": "10px"}}
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
            
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>       
          <Button color="inherit" onClick={()=>navigate("/ReciptsTypes")}>סוגי הוצאות</Button>
           <Button color="inherit" onClick={()=>navigate("/main")}>הוצאות</Button>
          <Button color="inherit" onClick={()=>navigate("/login")}>כניסה</Button>
          {/* <Button color="inherit" onClick={()=>navigate("/main")}>Receipts</Button> */}
 
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
