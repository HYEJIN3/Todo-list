"use client";

import { create } from "zustand";
import { Todo, TodoFilter } from "../types/todo";

interface TodoStore {
  todos: Todo[];
  filter: TodoFilter;
  todoId: number;
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  setFilter: (filter: TodoFilter) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  filter: "all",
  todoId: 0,
  addTodo: (text) =>
    set((state) => {
      if (state.todos.filter((todo) => !todo.completed).length >= 10) {
        alert("처리되지 않은 할 일은 10개를 넘을 수 없습니다.");
        return state;
      }
      const newTodo: Todo = { id: state.todoId, text, completed: false };
      return { todos: [...state.todos, newTodo], todoId: state.todoId + 1 };
    }),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  setFilter: (filter) => set({ filter }),
}));
