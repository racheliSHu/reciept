import SinglePagePDFViewer from "./pdf/single-page";
import samplePDF from "./pdf/sample.pdf";
import React, { useState } from "react";

export default function PdfImg() {
    const [pdf, setPdf] = useState(samplePDF);
    const [imgFile, setImgFile] = useState(null);      {/* צריך להוסיף סטטיט של תמונה וסטייט של PDF */}
    const [pdfFile, setPmdfFile] = useState(samplePDF);
    return (
        <>
            <input
                type="file"
                accept="application/pdf ,image/*"
                onChange={(e) => {
                    const file = e.target.files[0];
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => {
                            if(file.type === "application/pdf"){
                                setPdf(reader.result);
                                setImgFile(null)
                            }
                            else{
                                setPdf(null)
                                setImgFile(reader.result)
                            }
                        }
                    }

                } />
            < h4 > Single Page</h4>
            <SinglePagePDFViewer pdf={pdf} /> 
            <img src={pdf}/>
            <hr />
        </>
    )

}