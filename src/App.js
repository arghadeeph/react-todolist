import React, { useState } from "react";
import Header from "./Components/Header";
import { Aboutus } from "./Components/Aboutus";
import { Features } from "./Components/Features";
import { Todos } from "./Components/Todos/Todos";
import { Addtodos } from "./Components/Todos/Addtodos";

function App() {
  let user = true;
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to Market",
      description: "Take some snacks",
    },
    {
      id: 2,
      title: "Go to Medical shop",
      description: "Take Aspirin",
    },
  ]);

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, details) => {
    let id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = {
      id: id,
      title: title,
      description: details,
    };
    setTodos([...todos, newTodo]);
    console.warn("Adding this to todo.", newTodo);
  };

  return (
    <>
      <Header user={user} />
      <Addtodos addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </>
  );
}

export default App;
