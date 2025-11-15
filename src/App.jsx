import React, { useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import { TodoProvider, TodoContext } from "../src/assets/components/TodoContext";
import { ThemeContext } from "../src/assets/components/ThemeContext";
import EditTodo from "../src/assets/components/EditTodo";

function AppUI() {
  const { todos, addTodo, toggleDone, deleteTodo, startEdit, saveEdit, cancelEdit } =
    useContext(TodoContext);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTodo(input);
    setInput("");
  };

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-start p-6 transition-all ${isDark
          ? "bg-black text-white"
          : "bg-gray-100 text-black"
        }`}
    >
      <div
        className={`shadow-2xl rounded-2xl p-6 w-full max-w-md transition-all ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-blue-400">🧠 Todo App</h1>

          {/* Dark/Light Button */}
          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isDark ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className={`flex-grow px-3 py-2 rounded-md ${isDark ? "text-black" : "text-black border border-gray-400"
              }`}
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {todos.length === 0 && (
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"} text-center`}>
              No todos yet...
            </p>
          )}

          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`rounded-md p-3 flex items-center justify-between ${isDark ? "bg-gray-800" : "bg-gray-200"
                }`}
            >
              {todo.editing ? (
                <EditTodo todo={todo} saveEdit={saveEdit} cancelEdit={cancelEdit} />
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={todo.done}
                      onChange={() => toggleDone(todo.id)}
                      className="w-5 h-5"
                    />
                    <span
                      className={`${todo.done
                          ? "line-through text-gray-500"
                          : isDark
                            ? "text-white"
                            : "text-black"
                        }`}
                    >
                      {todo.text}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => startEdit(todo.id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-black px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-white"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppUI />
  );
}
