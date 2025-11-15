import { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text,
      done: false,
      editing: false,
    };

    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const startEdit = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, editing: true } : t
      )
    );
  };

  const saveEdit = (id, newText) => {
    setTodos(
      todos.map((t) =>
        t.id === id
          ? { ...t, text: newText, editing: false }
          : t
      )
    );
  };

  const cancelEdit = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, editing: false } : t
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleDone,
        startEdit,
        saveEdit,
        cancelEdit,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
