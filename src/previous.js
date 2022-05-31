import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Previous({ nav, setNav }, props) {
    const [pre, setPre] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        async function getResults() {
            const result = await axios.get("https://localhost:44391/api/GetDataReceipt");
            setPre(result.data)
            setNav(true)
        }

        getResults()
    }, [])
    return (
        <div className="splitScreen" >

            <ul >
                {pre.map(item =>
                    <div className="ul">
                        <h2>{item.receipt.nameShop}</h2>
                        {/* <li key={item.receipt.nameShop}>{item.receipt.nameShop}</li> */}

                        <span>{item.receipt.dateReceipt}</span> <br />
                        {/* <li key={item.receipt.dateReceipt}>{item.receipt.dateReceipt}</li> */}
                        <span>{"₪"}{item.receipt.totalSum}</span>   <hr />
                        {/* <li key={item.receipt.totalSum}>{"₪"}{item.receipt.totalSum}</li> */}
                        {/* <li>{item.products.map(pro => pro.nameProduct).join(' , ')}</li> */}
                        <span>{item.products.map(pro => pro.nameProduct).join(' , ')}</span>
                    </div>
                )
                }
            </ul>
        </div >
    );
}