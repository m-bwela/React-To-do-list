import React from "react";

function ToDoItem(props) {

   // const [isClicked, setIsClicked] = useState(false);

//function handleClick() {
    // setIsClicked((prevValue) => {
    //     return !prevValue;
        // if (prevValue === true) {
        //     return false;
        // } else {
        //     return true;
        // }
    //})
//}

    return (
    <div onClick={() => {
        props.onChecked(props.id)
    }}>
        <li /*style={{textDecoration: isClicked ? "line-through" : "none"}}*/ >{props.text}</li>
    </div>
    );
}

export default ToDoItem;