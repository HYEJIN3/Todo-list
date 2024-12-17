import React from "react";
import styled from "@emotion/styled";
import { Todo } from "../types/todo";
import Image from "next/image";

interface TodoItemProps {
  todo: Todo;
  onCompleted: (id: number) => void;
  onDelete: (id: number) => void;
}

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

const CheckboxContainer = styled.div<{ completed: boolean }>`
  border: ${(props) => (props.completed ? "none" : "1px solid #e5e5e5")};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.completed ? "#2182F3" : "#FFFFFF")};
`;
const Text = styled.span<{ completed: boolean }>`
  font-size: 20px;
  font-weight: 400;
  flex-grow: 1;
  color: ${(props) => (props.completed ? "#868686" : "#000000")};
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onCompleted,
  onDelete,
}) => {
  return (
    <Item data-testid={`todo-item-${todo.id}`}>
      <CheckboxContainer
        completed={todo.completed}
        onClick={() => onCompleted(todo.id)}
        aria-label="checkbox"
        role="checkbox"
      >
        {todo.completed && (
          <Image
            src={"/assets/icons/Check.svg"}
            width={18}
            height={18}
            alt="check"
          />
        )}
      </CheckboxContainer>
      <Text completed={todo.completed}>{todo.text}</Text>
      <DeleteButton onClick={() => onDelete(todo.id)} aria-label="delete">
        <Image
          src={"/assets/icons/Close.svg"}
          width={18}
          height={18}
          alt="delete"
        />
      </DeleteButton>
    </Item>
  );
};
