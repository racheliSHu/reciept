import SinglePagePDFViewer from "./pdf/single-page";
import samplePDF from "./pdf/sample.pdf";
import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import { Button } from "@material-ui/core";

export default function PdfImg({ setReciepts }, { nav, setNav }) {
    const [pdf, setPdf] = useState(null);
    const [serverPdf, setServerPdf] = useState(null);
    const [imgFile, setImgFile] = useState(null);

    {/* צריך להוסיף סטטיט של תמונה וסטייט של PDF */ }
    const sendReciepts = async (e) => {
        e.preventDefault();
        const url = "https://localhost:44391/api/AnalyzeReceipt";
        const formData = new FormData();
        formData.append('body', serverPdf);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        var promise = axios.post(url, formData, config);
        var response = await promise;
        console.log(response.data);
        if (response.data !== null)
            setReciepts(response.data);
        return promise;
    }

    return (
        <>
            <input
                type="file"
                className="input-style"
                accept="application/pdf ,image/*"
                onChange={(e) => {
                    const file = e.target.files[0];
                    setServerPdf(file);
                    console.log(file);
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                        if (file.type === "application/pdf") {
                            setPdf(reader.result);
                            setImgFile(null)
                        }
                        else {
                            setPdf(null)
                            setImgFile(reader.result)
                        }
                    }
                }

                } />
            {pdf && <SinglePagePDFViewer pdf={pdf} />}
            {imgFile && <img id="im1" src={imgFile} />}
            <button id="btn2" onClick={sendReciepts}>שליחה</button>
            <hr />
        </>
    )

}