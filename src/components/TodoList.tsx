import React from "react";
import styled from "@emotion/styled";
import { TodoItem } from "./TodoItem";
import { Todo, TodoFilter } from "../types/todo";

interface TodoListProps {
  todos: Todo[];
  filter: TodoFilter;
  onCompleted: (id: number) => void;
  onDelete: (id: number) => void;
  onFilterChange: (filter: TodoFilter) => void;
}

const ListContainer = styled.div`
  background-color: #ffffff;
  margin-top: 12px;
  border-radius: 24px;
  padding: 32px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 12px 30px;
  background-color: ${(props) => (props.active ? "#EBF4FF" : "#FFFFFF")};
  border-radius: 12px;
  color: ${(props) => (props.active ? "#2182F3" : "black")};
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const Quantity = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin: 4px 0;
`;

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  filter,
  onCompleted,
  onDelete,
  onFilterChange,
}) => {
  const filteredTodos = todos.filter((todo) => {
    if (filter === "todo") return !todo.completed;
    if (filter === "done") return todo.completed;
    return true;
  });

  return (
    <ListContainer>
      <FilterContainer>
        <FilterButton
          active={filter === "all"}
          onClick={() => onFilterChange("all")}
        >
          All
        </FilterButton>
        <FilterButton
          active={filter === "todo"}
          onClick={() => onFilterChange("todo")}
        >
          To Do
        </FilterButton>
        <FilterButton
          active={filter === "done"}
          onClick={() => onFilterChange("done")}
        >
          Done
        </FilterButton>
      </FilterContainer>
      <Quantity>총 {filteredTodos.length}개</Quantity>
      <List>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompleted={onCompleted}
            onDelete={onDelete}
          />
        ))}
      </List>
    </ListContainer>
  );
};
