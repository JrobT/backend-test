import React from "react";
import { Todo } from "../models/Todo";

import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

interface Props {
  todos?: Todo[];
}

const TodoList: React.FC<Props> = ({ todos = [] }) => {
  return (
    <div className="flex flex-col grow mx-auto max-w-screen-xl overflow-y-scroll">
      <AddTodo />
      {Array.isArray(todos) &&
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoList;
