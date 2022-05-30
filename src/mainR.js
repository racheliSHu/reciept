import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function Main() {
    let navigate = useNavigate()
    return (
        <div className="splitScreen2" >
            <Button  onClick={() => navigate("/recipts")}>העלאת חשבונית</Button>
            <Button onClick={() => navigate("/recipt")}>להוספת חשבונית ידנית</Button>
            <Button onClick={() => navigate("/past")}>לחשבוניות קודמות</Button> 
        </div >
    );
}