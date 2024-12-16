import React from "react";
import styled from "@emotion/styled";
import { TodoItem } from "./TodoItem";
import { Todo } from "../types/todo";

interface TodoListProps {
  todos: Todo[];
}

const ListContainer = styled.div`
  background-color: #ffffff;
  margin-top: 12px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Quantity = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin: 4px 0;
`;

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const filteredTodos: any = [];
  return (
    <ListContainer>
      <Quantity>총 {filteredTodos.length}개</Quantity>
      <List>
        {filteredTodos.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </List>
    </ListContainer>
  );
};
