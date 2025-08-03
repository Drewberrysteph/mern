import { useState } from "react";

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

  const handleCompleted = (id: number) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })

    setTodos(newTodos);
  };

  const handleRemove = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos)
  };

  return (
    <div>
      <h1>Todo</h1>
      {todos.map((todo) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCompleted(todo.id)}
            />
            <p style={{textDecoration: todo.completed ? "line-through" : ""}}>{todo.title}</p>
            <button onClick={() => handleRemove(todo.id)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
