import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import Heading from "./Heading";

function App() {

const [listItems, setListItems] = useState([]);

function handleClick(inputText) {
  setListItems([...listItems, inputText]);
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
      <Heading />
      <InputArea 
      clickAdd={handleClick}
      />
      <div>
        <ul>
          {listItems.map((listItem, index) => {
            return (
            <ToDoItem 
              key={index}
              id={index}
              text={listItem}
              onChecked={deleteItem}
            />)
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
