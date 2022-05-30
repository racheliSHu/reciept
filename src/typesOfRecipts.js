import "./styles.css";
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import { useState, useEffect, useRef } from "react";

export default function Reci() {
  const [pre, setPre] = useState([])
  const data = [
    ["530", "ביגוד"],
    ["2000.5", "מזון"],
    ["500", "רכב"],
    ["1000", "לימודים"],
  ];
  const columns = ["סכום", "שם"];
  useEffect(() => {
    async function getResults() {
      const result = await axios.get("https://localhost:44391/api/Category");
      console.log(result.data)
      setPre(Array.from(result.data))
    }
    getResults()
  }, [])

  const options = {
    filterType: "checkbox",
    rowsPerPage: [7],
    rowsPerPageOptions: [1, 3, 5, 6, 7, 10],
    jumpToPage: true,
    textLabels: {
      pagination: {
        next: "Next >",
        previous: "< Previous",
        rowsPerPage: "Total items Per Page",
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
      <MUIDataTable
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}

{/* <ul>
      {pre.map(item =>
        <>
          <li key={item.category.nameCategory}>{item.category.nameCategory}</li>
        </>)}
    </ul>
  // </div> */}
{/*   
); */}