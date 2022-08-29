import { Todo } from "../models/Todo";

const api: string = "http://localhost:3001";

export const getTodos = async (): Promise<Todo[]> => {
  return fetch(`${api}/todo`).then((r) => r.json());
};

export const deleteTodo = async (todo: Todo): Promise<void> => {
  return fetch(`${api}/todo/${todo.id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  }).then((r) => r.json());
};

export const updateTodo = async (todo: Todo): Promise<void> => {
  return fetch(`${api}/todo/${todo.id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  }).then((r) => r.json());
};

export const addTodo = async (todo: Partial<Todo>): Promise<void> => {
  return fetch(`${api}/todo`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  }).then((r) => r.json());
};
