import React, { useState } from 'react';
import "./index.css";
import DeleteIcon from '@mui/icons-material/Delete';
const ListCom = (props) =>{
    const [line, setLine] = useState(false);

    const cutIt = () =>{
        setLine(true);
    };
    return(
    <div className="todo_style">
        <span onClick={cutIt}><DeleteIcon className="deleteIcon" /></span>
        <li style={{ textDecoration: line ? "line-through" : "none" }}> {props.text} </li>
    </div>
    ); 
};
export default ListCom;