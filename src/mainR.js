import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useEffect } from "react";
import ButtonAppBar from "./navbar";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { BsTextCenter } from "react-icons/bs";

export default function Main({ nav, setNav }) {
    let navigate = useNavigate()
    useEffect(() => {
        setNav(true)
        

    },[])
    return (
        <div className="splitScreen2" >
            <button id="btn1"  onClick={() => navigate("/recipts")} >  <AiOutlineCloudUpload></AiOutlineCloudUpload> העלאת חשבונית</button><br></br>
            <button id="btn1"  onClick={() => navigate("/recipthand")} ><BsPlusSquare></BsPlusSquare> להוספת חשבונית ידנית</button><br></br>
            <button id="btn1"  onClick={() => navigate("/past")} > <BsTextCenter></BsTextCenter> לחשבוניות קודמות</button>
        </div >
 
    );
}