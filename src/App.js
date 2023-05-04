import { useContext, useState } from "react";
import BoxInput from "./components/BoxInput";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import "./styles.css";
import AppContext from "./AppContext";

function TodoList() {
  const [stateTasks, setStateTasks] = useState("");
  const [array, setArray] = useState([]);
  const value = { stateTasks, setStateTasks, array, setArray };
  return (
    <AppContext.Provider value={value}>
      <div className="wrapper">
        <Header />
        <BoxInput />
        <TaskList />
      </div>
    </AppContext.Provider>
  );
}

export default TodoList;
