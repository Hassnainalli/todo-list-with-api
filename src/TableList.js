import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import './index.css';

const columns = [
  { field: "id", headerName: "ID" },
  { field: "title", headerName: "Title", width: 300 },
//   { field: "description", headerName: "Description", width: 600 },
];

const TableList = () => {

    const history = useHistory();
  
    const routeChange = () =>{ 
      let path = "/todolist"; 
      history.push(path);
    }

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.154:8000/todo/")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  });

  return (
    <>
    <div className="table_button">
      <Button className="newBtn" onClick={routeChange}>
        <AddIcon />
      </Button>
      </div>

      <div style={{ height: 700, width: "100%" }}>
        <DataGrid rows={tableData} columns={columns} checkboxSelection />
      </div>
    </>
  );
};

export default TableList;
