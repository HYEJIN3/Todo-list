import React from "react";
import styled from "@emotion/styled";
import { Todo } from "../types/todo";
import Image from "next/image";

interface TodoItemProps {
  todo: Todo;
}

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const CheckboxContainer = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
`;
const Text = styled.span<{ completed: boolean }>``;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <Item data-testid={`todo-item-${todo.id}`}>
      <CheckboxContainer>
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
      <DeleteButton>
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
