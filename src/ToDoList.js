import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ListCom from "./ListCom";
import Axios from "axios";
import "./index.css";
const ToDoList = () => {
  // const getJoke = () => {
  //   Axios.get("http://192.168.1.154:8000/todo/").then(
  //     (response) => {
  //       console.log(response);
  //     }
  //   );
  // };

  const [posts, setPosts] = useState([])
  useEffect(() =>{
    Axios.get('http://192.168.1.154:8000/todo/')
    .then(res => {
      console.log(res)
    })
    .catch(err =>{
      console.log(err)
    })
  })



  const [item, setItem] = useState("");

  const [newitem, setNewItem] = useState([]);
  const result = newitem.filter((e) => e);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listOfItems = () => {
    setNewItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
    Axios.post("http://192.168.1.154:8000/todo/",{
      title: item,
    })
    .then(res => {
      console.log('posting data',res)
    })
    .catch(err => {
      console.log(err)
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List </h1>
          <br />
          <form>
            <input
              type="text"
              value={item}
              placeholder="Add an Item"
              onChange={itemEvent}
            />
            <Button className="newBtn" onClick={listOfItems}>
              <AddIcon />
            </Button>
            <ul>
              {
                posts.map(post => <li key={post.id}>{post.title}</li>)
              }
            </ul>
            {/* <Button className="newBtn" onClick={getJoke}>
              <AddIcon />
            </Button> */}
            <br />
            <ol>
              {result.map((val, index) => {
                return <ListCom key={index} text={val} />;
              })}
            </ol>
          </form>
          <br />
        </div>
      </div>
    </>
  );
};

export default ToDoList;
