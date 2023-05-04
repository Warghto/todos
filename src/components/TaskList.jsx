import React, { useState, useContext } from "react";
import AppContext from "../AppContext";

function TaskList() {
  const { stateTasks, setStateTasks, array, setArray } = useContext(AppContext);
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState("");

  const removeItem = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };

  const editItem = (index, value) => {
    setEditIndex(index);
    setEditText(value);
  };

  const saveItem = () => {
    const editArray = [...array];
    editArray[editIndex] = editText;
    setArray(editArray);
    setEditIndex(-1);
    setEditText("");
  };

  return (
    <div>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <input
                type="text"
                value={editText}
                onChange={(event) => setEditText(event.target.value)}
              />
            ) : (
              <div>{item}</div>
            )}
            <button onClick={() => editItem(index, item)}>Edit</button>
            {editIndex === index ? (
              <button onClick={saveItem}>Save</button>
            ) : (
              <button onClick={() => removeItem(index)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
