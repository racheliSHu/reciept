import "./styles.css";
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import { useState, useEffect, useRef } from "react";
import ButtonAppBar from "./navbar";

export default function Reci({ nav, setNav }) {
  useEffect(() => {
    setNav(true)
  }, [])
  const [data, setData] = useState([])
  const columns = ["סכום", "שם"];
  useEffect(() => {
    async function getResults() {
      const result = await axios.get("https://localhost:44391/api/Caregory");
      const newData = [];
      for (const [key, value] of Object.entries(result.data)) {
        newData.push([value, key])
      }
      console.log(newData)
      setData(newData);
    }
    getResults()
  }, [])

  const options = {
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
      <div id="tbl">
        <MUIDataTable
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
}

