import { useState, useRef } from "react";
import TaskItem from "./TaskItem";
import Header from "./Header";
import Footer from "./Footer";
import { FaPlus } from "react-icons/fa";

function TodoApp() {
  const inputRef = useRef();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addItem = (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const myNewTask = { id, checked: false, task };
    const listTasks = [...tasks, myNewTask];
    setTasks(listTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask) 
    return;
    addItem(newTask);
    setNewTask("");
  };

  const taskCompleted = tasks.filter((task) => task.checked === true);

  return (
    <div className="App">
      <Header title="Task List" />
      <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
          autoFocus
          ref={inputRef}
          id="addItem"
          type="text"
          placeholder="Add Item"
          required
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          type="submit"
          aria-label="Add Item"
          onClick={() => inputRef.current.focus()}
        >
          <FaPlus />
        </button>
      </form>
      <TaskItem tasks={tasks} setTasks={setTasks} />
      <div
        className="completeTask"
        style={{
          backgroundColor: " steelblue",
          display: "grid",
          placeContent: "center",
          position: "fixed",
          padding: "0.25rem",
          height: "10vh",
          boxSizing: "border-box",
          width: "100%",
          fontWeight: "bold",
          fontSize: "25px",
          color: "aliceblue",
        }}
      >
        {" "}
        Completed Task {taskCompleted.length}
      </div>

      <Footer length={tasks.length} />
    </div>
  );
}

export default TodoApp;
