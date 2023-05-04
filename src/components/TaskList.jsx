import React, { useContext } from "react";
import AppContext from "../AppContext";

function TaskList() {
  const { stateTasks, setStateTasks, controlInputField, array, setArray } =
    useContext(AppContext);

  const removeItem = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };

  return (
    <div>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={removeItem}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TaskList;
