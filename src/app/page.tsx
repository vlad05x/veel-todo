"use client";

import { useState, useEffect } from "react";
import { Todo } from "@/types/types";
import {
  getTodos,
  addTodo,
  deleteTodo,
} from "@/services/todoService";
import { TodoInput } from "@/components/TodoInput";
import { TodoItem } from "@/components/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      setTodos(data);
      setLoading(false);
    };

    fetchTodos();
  }, []);

  const handleAddTodo = async (title: string) => {
    const newTodo = await addTodo(title);
    setTodos((prev) => [newTodo, ...prev]);
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  if (loading) return <p className="p-4 text-center">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">📝 My Todo App</h1>
      <TodoInput onAdd={handleAddTodo} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
      ))}
    </div>
  );
}
