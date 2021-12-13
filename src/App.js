import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [todos, setTodos] = useState([]);

  useEffect(async () => {
    let res = await fetch("http://localhost:8080/todos", {
      method: "GET",
    });
    let data = await res.json();
    setTodos(data);
  }, []);

  return (
    <div className="todo-container">
      {todos.map((todo) => {
        return (
          <div>
            <h2>{todo.title}</h2>
            <p>{todo.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
