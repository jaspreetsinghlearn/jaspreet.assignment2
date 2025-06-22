import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAdd = () => {
    if (todo.trim() === "") {
      alert("Please enter a todo");
    } else {
      const newTodo = {
        text: todo,
        completed: false,
      };
      setTodoList([...todoList, newTodo]);
      setTodo("");
      alert("Todo added successfully!");
    }
  };

  const handleCheckbox = (index) => {
    const updatedList = [...todoList];
    updatedList[index].completed = !updatedList[index].completed;
    setTodoList(updatedList);
  };

  return (
    <div className="app">
      <h1>React To-Do App</h1>
      <div className="input-section">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter your todo"
        />
        <button onClick={handleAdd}>Add Todo</button>
      </div>

      <ul className="todo-list">
        {todoList.map((item, index) => (
          <li key={index} className={item.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleCheckbox(index)}
            />
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
