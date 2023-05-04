import { useContext, useState } from "react";
import AppContext from "../AppContext";

function BoxInput() {
  const { stateTasks, setStateTasks, array, setArray } = useContext(AppContext);
  const controlInputField = (event) => {
    event.preventDefault();
    setStateTasks(event.target.value);
  };
  const pushToArray = () => {
    setArray([...array, stateTasks]);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Type some tasks to get easier your life:)"
          onChange={controlInputField}
        />
        <button onClick={() => pushToArray()} type="button">
          Add
        </button>
      </form>
    </div>
  );
}
export default BoxInput;
