import React, { ChangeEvent, FormEvent, useState } from "react";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const todoFixtures = [
  {
    id: 1,
    title: "Take out the trash",
    completed: false,
  },
  {
    id: 2,
    title: "Walk the dog",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(todoFixtures);
  const [newTodo, setNewTodo] = useState({
    id: 0,
    title: "",
    completed: false,
  });

  const handleCompleted = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleRemove = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleAddTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewTodo({
      id: todos.length + 1,
      title: value,
      completed: false,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((todos) => [...todos, newTodo]);
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add new todo"
          value={newTodo.title}
          onChange={handleAddTodo}
        />
        <button type="submit">Submit</button>
      </form>
      <hr />
      {todos.map((todo) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }} key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCompleted(todo.id)}
            />
            <p style={{ textDecoration: todo.completed ? "line-through" : "" }}>
              {todo.title}
            </p>
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
