"use client";

import React from "react";
import styled from "@emotion/styled";
import { TodoInput } from "../TodoInput";
import { TodoList } from "../TodoList";
import { useTodoStore } from "../../hooks/useTodoStore";

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  line-height: 72px;
  font-weight: 700;
  font-size: 24px;
`;

export const TodoUserListPage: React.FC = () => {
  const todos: any = [];
  return (
    <Container>
      <Title>Todo List</Title>
      <TodoList todos={todos} />
    </Container>
  );
};
