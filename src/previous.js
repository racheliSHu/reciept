import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import DisplayReceipt from "./displayReceipt";
import swal from "sweetalert";
import { BsEye } from "react-icons/bs";
import React from 'react';
import Popup from 'reactjs-popup';
import { AiOutlineDelete } from "react-icons/ai";

export default function Previous({ nav, setNav }, props) {
    const [pre, setPre] = useState([])
    const [pdf, setPdf] = useState(null);
    const [imgFile, setImgFile] = useState(null);
    let navigate = useNavigate()
    async function deieteReceipt(id) {
        const result = axios.delete(`https://localhost:44391/api/DeleteReceipt/` + id);
        const t = await result;
        console.log(t.data);
    }


    function watchClick(item) {
        let invoiceToWatch = item.receipt.Id;
        let path=item.receipt.path
        swal(
          {
            content: {
   
              element: "iframe",
              attributes: {
                src: `https://localhost:44391/App_Data/${path.substr(
                    path.lastIndexOf("\\") + 1
                  )}`,
                height:'750vh',
                width:'580vw',
    
              },
            },
            height:'750vh',
                width:'750vw',
          }
        );
    }

    function showReceipt(path) {
        console.log(path);
        const div = DisplayReceipt(path);
        setPre(div)
        console.log(div);

    }
=======

export default function Previous({ nav, setNav }, props) {
    const [pre, setPre] = useState([])
    let navigate = useNavigate()

>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
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

                        <span>{new Date(item.receipt.dateReceipt).toDateString()}</span> <br />
                        {/* <li key={item.receipt.dateReceipt}>{item.receipt.dateReceipt}</li> */}
                        <span>{"₪"}{item.receipt.totalSum}</span>   <hr />
                        {/* <li key={item.receipt.totalSum}>{"₪"}{item.receipt.totalSum}</li> */}
                        {/* <li>{item.products.map(pro => pro.nameProduct).join(' , ')}</li> */}
<<<<<<< HEAD
                       


                        <button id="btn3" onClick={() =>watchClick(item)}>     <BsEye></BsEye>   צפייה</button>

                        <button id="btn3" onClick={() => deieteReceipt(item.receipt.Id)}>  <AiOutlineDelete></AiOutlineDelete>   מחיקה</button>
                       

                      
                    
=======
                        <span>{item.products.map(pro => pro.nameProduct).join(' , ')}</span>
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
                    </div>
                )
                }
            </ul>
        </div >
    );
}