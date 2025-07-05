import React, { useState } from "react";

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
          {listItems.map((listItem) => {
            return <li>{listItem}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
