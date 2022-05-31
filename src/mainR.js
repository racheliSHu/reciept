import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useEffect } from "react";
import ButtonAppBar from "./navbar";

export default function Main({ nav, setNav }) {
    let navigate = useNavigate()
    useEffect(() => {
        setNav(true)

    })
    return (
        <div className="splitScreen2" >
            <Button onClick={() => navigate("/recipts")}>העלאת חשבונית</Button>
            <Button onClick={() => navigate("/recipthand")}>להוספת חשבונית ידנית</Button>
            <Button onClick={() => navigate("/past")}>לחשבוניות קודמות</Button>
        </div >
    );
}