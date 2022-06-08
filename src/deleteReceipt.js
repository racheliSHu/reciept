import React from "react";
import axios from "axios";

export default function DeleteReceipt() {

    async function deieteReceipt() {
        const id = 6;
        const result = axios.delete(`https://localhost:44391/api/DeleteReceipt/` + id);
        const t = await result;
        console.log(t.data);


    }
    return (
        <button onClick={deieteReceipt}>delete</button>
    )

}

