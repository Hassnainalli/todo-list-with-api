import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Axios } from "axios";
import "./index.css";

// const postDelete = (id, e) => {
//   e.preventDefault();
//   Axios.delete(`http://192.168.1.154:8000/todo/${id}`)
//   .then(res => console.log('Deleted', res)).catch(err => console.log(err))
// }
// const columns = [
//   { field: "id", headerName: "ID" },
//   { field: "title", headerName: "Title", width: 200 },
//   {
//     field: "edit",
//     headerName: "Edit",
//     renderCell: () => (
//       <strong>
//         <Button
//           variant="contained"
//           color="primary"
//           size="small"
//           style={{ marginLeft: 16 }}
//         >
//           Update
//         </Button>
//       </strong>
//     ),
//   },
//   {field: "delete", headerName: "Delete", renderCell: () => (
//     <strong>
//       <Button
//         variant="contained"
//         color="error"
//         size="small"
//         onClick={(e) => postDelete()}
//         style={{ marginLeft: 16 }}
//       >
//         Delete
//       </Button>
//     </strong>
//   ), }

//   //   { field: "description", headerName: "Description", width: 600 },
// ];

const TableList = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = "/todolist";
    history.push(path);
  };

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.154:8000/todo/")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  });

  const postDelete = (id, e) =>{
    e.preventDefault();
    Axios.delete(`http://192.168.1.154:8000/todo/${id}`)
    .then(res => console.log('Deleted', res)).catch(err => console.log(err))
  }

  return (
    <>
      <div className="table_button">
        <Button className="newBtn" onClick={routeChange}>
          <AddIcon />
        </Button>
      </div>

      <div>
        {/* <DataGrid rows={tableData} columns={columns} checkboxSelection /> */}
        {/* <Button size="small" color="primary" variant="contained">
          Add
        </Button> */}
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {tableData.map((item, i) => {
    return ( 
      <tr>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>
        <strong>
        <Button variant="danger" onClick={(e) => postDelete(item.id, e)}>Delete</Button>
        </strong>
      </td>
    </tr>
    )
  })}
  </tbody>
</Table>
      </div>
    </>
  );
};

export default TableList;
