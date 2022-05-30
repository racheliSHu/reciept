import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Previous() {
    const [pre, setPre] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        async function getResults() {
            const result = await axios.get("https://localhost:44391/api/GetDataReceipt");
            setPre(result.data)
        }
        getResults()
    }, [])
    return (
        <div className="splitScreen" >

            <ul>
                {pre.map(item =>
                    <>
                        <li key={item.receipt.nameShop}>{item.receipt.nameShop}</li>
                        <li key={item.receipt.dateReceipt}>{item.receipt.dateReceipt}</li>
                        <li key={item.receipt.totalSum}>{"₪"}{item.receipt.totalSum}</li>
                        <li>{item.products.map(pro => pro.nameProduct).join(' , ')}</li>
                    </>
                )
                }
            </ul>
        </div >
    );
}