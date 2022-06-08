
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";


export default function DisplayReceipt() {
   const [link, setlink] = useState(null);
   const local=useLocation.state;
   useEffect(() => {
    setlink(local.path)
})
return(
    <div>
    {console.log(link)}
     <iframe
        style={{ width: "100%", height: "666px" }}
        src={`https://localhost:44391/App_Data/${link.substr(
            link.lastIndexOf("\\") + 1
          )}`}
        title="title"
    />
    </div>
)

}
