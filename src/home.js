import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "./redux/userReducer/actions";

export default function HomePage() {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    return (<div className="home">
        <input className="b" type="button" onClick={()=>navigate("/login")} value="כניסה" />
        {/* <input type="button" onClick={()=>navigate("/recipts")} value="Recipts" />
        <input type="button" onClick={()=>navigate("/reciptsTypes")} value="ReciptsTypes" />
        <span>{user.email}</span><br/>
         <span>{user.name}</span> 
        <button onClick={() => dispatch(setUser({ email: 'cc@dd', name: 'racheli' }))}>dispatch changes</button>  */}
     </div>);
}
