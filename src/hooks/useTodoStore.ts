f"use client";

import { create } from "zustand";
import { Todo, TodoFilter } from "../types/todo";

interface TodoStore {
  // to do
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  filter: "all",
  todoId: 0,
  addTodo: (text) =>
    set((state) => {
      // to do
    }),
  toggleTodo: (id) =>
    set((state) => ({
      // to do
    })),
  deleteTodo: (id) =>
    set((state) => ({
      // to do
    })),
  setFilter: (filter) => set({ filter }),
}));
