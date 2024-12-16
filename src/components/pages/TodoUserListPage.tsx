"use client";

import React from "react";
import styled from "@emotion/styled";
import { TodoInput } from "../TodoInput";
import { TodoList } from "../TodoList";
import { useTodoStore } from "../../hooks/useTodoStore";

const Container = styled.div`
  max-width: 737px;
  margin: 0 auto;
  padding: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 56px;
  padding: 32px;
`;

export const TodoUserListPage: React.FC = () => {
  const { todos, filter, addTodo, completedTodo, deleteTodo, setFilter } =
    useTodoStore();

  return (
    <Wrapper>
      <Container>
        <Title>To Do List</Title>
        <TodoInput onAdd={addTodo} />
        <TodoList
          todos={todos}
          filter={filter}
          onCompleted={completedTodo}
          onDelete={deleteTodo}
          onFilterChange={setFilter}
        />
      </Container>
    </Wrapper>
  );
};
