import "./styles.css";
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import { useState, useEffect, useRef } from "react";
import ButtonAppBar from "./navbar";

export default function Reci() {
  const [data, setData] = useState([])
  const columns = ["סכום", "שם"];
  useEffect(() => {
    async function getResults() {
      const result = await axios.get("https://localhost:44391/api/Caregory");
      const newData = [];
      for (const [key, value] of Object.entries(result.data)) {
        newData.push([value,key])
      }
      setData(newData);
    }
    getResults()
  }, [])

  const options = {
    filterType: "checkbox",
<<<<<<< HEAD
    
=======
    rowsPerPage: [7],
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
    rowsPerPageOptions: [1, 3, 5, 6, 7, 10],
    jumpToPage: true,
    textLabels: {
      pagination: {
        next: "Next >",
        previous: "< Previous",
        rowsPerPage: "מס' קטגוריות בעמוד",
        displayRows: "OF",
        require: "true",
        data: "typeof(number)"
      },
    },
    onChangePage(currentPage) {
      console.log({ currentPage });
    },
    onChangeRowsPerPage(numberOfRows) {
      console.log({ numberOfRows });
    },
  };

  return (
    <div>
      <h1 >סוגי הוצאות</h1>
<<<<<<< HEAD
    <div id="tbl">
=======
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
      <MUIDataTable
        data={data}
        columns={columns}
        options={options}
      />
<<<<<<< HEAD
      </div>
=======
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
    </div>
  );
}

