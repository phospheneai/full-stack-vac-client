import { useEffect, useState } from "react";

function HomePage() {
  let [todos, setTodos] = useState([]);
  let [todoTitle, setTodoTitle] = useState("");
  let [todoBody, setTodoBody] = useState("");

  useEffect(async () => {
    let res = await fetch("http://localhost:8080/todos", {
      method: "GET",
    });
    let data = await res.json();
    setTodos(data);
  }, []);

  function changeTitle(e) {
    setTodoTitle(e.target.value);
  }

  function changeBody(e) {
    setTodoBody(e.target.value);
  }

  let addTodo = async () => {
    const res = await fetch("http://localhost:8080/todos", {
      method: "POST",
      body: JSON.stringify({
        title: todoTitle,
        body: todoBody,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setTodos([...todos, { title: todoTitle, body: todoBody }]);
    alert("Todo Added");
  };

  return (
    <>
      <div className="todo-form">
        <input
          type="text"
          onChange={changeTitle}
          name="title"
          value={todoTitle}
        />
        <input type="text" onChange={changeBody} name="body" value={todoBody} />
        <button onClick={addTodo}>Add Todo</button>
      </div>
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
    </>
  );
}

export default HomePage;
