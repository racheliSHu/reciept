import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "./redux/userReducer/actions";
import { Button } from "@mui/material";
import img from "./images/3992745.jpg";
import Logo from "./images/logo.jpg";
import { useEffect } from "react";
export default function HomePage({ nav, setNav }) {
    useEffect(() => {
      setNav(false)
    }, [])
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    return (
        <div className="row">
        {/* <img className="im" src={require('./images/logo.jpg')} height={50} width={50} /> */}
        {/* <img src={Logo} alt="Icone adicionar" className="img" height={100} width={100}/> */}



            <div className="column">
                <img src={img} alt="Icone adicionar" className="img" />
            </div>
            <div className="ca">
                <h1 id="h1" >.ככה מנהלים הוצאות
                <br></br>.נקודה</h1>
                
                <p id="a1" > חישוב הוצאות, חילוץ נתונים מחשבונית
                    <br></br> ,לא צריך לבזבז לכם רגע מיותר<br></br>
                    . בשביל זה אנחנו כאן</p>
                <Button id="btn" onClick={() => navigate("/login")}>כניסה</Button>
            </div>


       
        {/* <input type="button" onClick={()=>navigate("/recipts")} value="Recipts" /> */}
        {/* <input className="b" type="button" onClick={()=>navigate("/login")} value="כניסה" /> */}
        {/* 
        <input type="button" onClick={()=>navigate("/reciptsTypes")} value="ReciptsTypes" />
        <span>{user.email}</span><br/>
         <span>{user.name}</span> 
        <button onClick={() => dispatch(setUser({ email: 'cc@dd', name: 'racheli' }))}>dispatch changes</button>  */}
    </div> );
}
