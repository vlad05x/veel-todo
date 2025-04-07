import { Todo } from "@/types/types";
import { Trash2 } from 'lucide-react';

interface Props {
  todo: Todo;
  onDelete: (id: number) => void;
}

export const TodoItem = ({ todo, onDelete }: Props) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded shadow mb-2">
      <span>{todo.title}</span>
      <button
        className="bg-red-500 hover:bg-red-300 text-white px-3 py-1 rounded cursor-pointer"
        onClick={() => onDelete(todo.id)}
      >
        <Trash2 />
      </button>
    </div>
  );
};