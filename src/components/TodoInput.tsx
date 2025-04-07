import { useState } from "react";
import { CirclePlus } from 'lucide-react';

interface Props {
  onAdd: (title: string) => void;
}

export const TodoInput = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        className="flex-1 p-2 border rounded"
        placeholder="Add a todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-blue-500 hover:bg-blue-300 text-white px-4 rounded cursor-pointer" type="submit">
        <CirclePlus />
      </button>
    </form>
  );
};
