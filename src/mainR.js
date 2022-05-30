import { useNavigate } from "react-router-dom";
import ColumnsGrid from './recipts';
import Button from '@mui/material/Button';

export default function Main() {
    let navigate = useNavigate()
    return (
        <div className="splitScreen" >
            <Button onClick={() => navigate("/recipts")}>העלאת חשבונית</Button>
            <Button onClick={() => navigate("/recipt")}>להוספת חשבונית ידנית</Button>
            {/* <Button onClick={() => navigate("/past")}>לחשבוניות קודמות</Button> */}
        </div >
    );
}