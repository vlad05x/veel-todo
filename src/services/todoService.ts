import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export const getTodos = async () => {
  const response = await axios.get(`${BASE_URL}?_limit=10`);
  return response.data;
};

export const addTodo = async (title: string) => {
  const response = await axios.post(BASE_URL, {
    title,
    completed: false,
    userId: 1,
  });
  return response.data;
};

export const deleteTodo = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};