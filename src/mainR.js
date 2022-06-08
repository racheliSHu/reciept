import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useEffect } from "react";
import ButtonAppBar from "./navbar";
<<<<<<< HEAD
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { BsTextCenter } from "react-icons/bs";
=======
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234

export default function Main({ nav, setNav }) {
    let navigate = useNavigate()
    useEffect(() => {
        setNav(true)
<<<<<<< HEAD
        

    },[])
    return (
        <div className="splitScreen2" >
            <button id="btn1"  onClick={() => navigate("/recipts")} >  <AiOutlineCloudUpload></AiOutlineCloudUpload> העלאת חשבונית</button><br></br>
            <button id="btn1"  onClick={() => navigate("/recipthand")} ><BsPlusSquare></BsPlusSquare> להוספת חשבונית ידנית</button><br></br>
            <button id="btn1"  onClick={() => navigate("/past")} > <BsTextCenter></BsTextCenter> לחשבוניות קודמות</button>
        </div >
 
=======

    })
    return (
        <div className="splitScreen2" >
            <Button onClick={() => navigate("/recipts")}>העלאת חשבונית</Button>
            <Button onClick={() => navigate("/recipthand")}>להוספת חשבונית ידנית</Button>
            <Button onClick={() => navigate("/past")}>לחשבוניות קודמות</Button>
        </div >
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
    );
}