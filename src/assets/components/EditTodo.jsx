import { useState } from "react";

export default function EditTodo({ todo, saveEdit, cancelEdit }) {
  const [newText, setNewText] = useState(todo.text);

  return (
    <div className="flex w-full gap-2">
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        className="flex-grow px-2 py-1 rounded-md text-black"
      />
      <button
        onClick={() => saveEdit(todo.id, newText)}
        className="bg-green-600 hover:bg-green-700 px-2 py-1 rounded"
      >
        Save
      </button>
      <button
        onClick={() => cancelEdit(todo.id)}
        className="bg-gray-600 hover:bg-gray-700 px-2 py-1 rounded"
      >
        Cancel
      </button>
    </div>
  );
}
