import React, { useState } from "react";
import Input from "./Input";
import Show from "./Show";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const handleTaskCreate = (title) => {
    const payload = {
      title: title,
      status: false,
      id: todo.length + 1
    };
    setTodo([...todo, payload]);
  };
  console.log(todo);
  return (
    <>
      <Input onTaskCreate={handleTaskCreate} />
      {todo.map((item) => (
        <Show title={item.title} status={item.status} />
      ))}
    </>
  );
};

export default Todo;