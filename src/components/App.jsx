import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {

const [inputText, setInputText] = useState("");
const [listItems, setListItems] = useState([]);

function handleChange(event) {
  const newValue = event.target.value;
  setInputText(newValue);
}

function handleClick() {
  setListItems([...listItems, inputText]);
  setInputText("");
}

function deleteItem(id) {
    setListItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    })
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((listItem, index) => {
            <ToDoItem 
            key={index}
            id={index}
            text={listItem}
            onChecked={deleteItem}
            />
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
