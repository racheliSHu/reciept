import SinglePagePDFViewer from "./pdf/single-page";
import samplePDF from "./pdf/sample.pdf";
import React, { useState } from "react";
import axios from "axios";
<<<<<<< HEAD
import "./styles.css";
=======
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234

export default function PdfImg({ setReciepts }, { nav, setNav }) {
    const [pdf, setPdf] = useState(null);
    const [serverPdf, setServerPdf] = useState(null);
    const [imgFile, setImgFile] = useState(null);
<<<<<<< HEAD
    
=======
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
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
<<<<<<< HEAD
                
                //????????????//
=======
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
                accept="application/pdf ,image/*"
                onChange={(e) => {
                    const file = e.target.files[0];
                    setServerPdf(file);
<<<<<<< HEAD
                    console.log(file);
=======
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
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
<<<<<<< HEAD
            {imgFile && <img id="im1" src={imgFile} />}
            <button id="btn2" onClick={sendReciepts}>שליחה</button>
=======
            {imgFile && <img src={imgFile} />}
            <button onClick={sendReciepts}>Send</button>
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
            <hr />
        </>
    )

}