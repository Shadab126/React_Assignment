import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function TaskItem({ tasks, setTasks }) {
    
  const handleCheck = (id) => {
    const listTasks = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(listTasks);
  };

  const handleDelete = (id) => {
    const listTasks = tasks.filter((item) => item.id !== id);
    setTasks(listTasks);
  };

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li className="item" key={task.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(task.id)}
                checked={task.checked}
              />
              <label
                style={task.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(task.id)}
              >
                {task.task}
              </label>

              <FaTrashAlt
                onClick={() => handleDelete(task.id)}
                role="button"
                tabIndex="0"
              />
          </li>
        );
      })}
    </ul>
  );
}

export default TaskItem;
