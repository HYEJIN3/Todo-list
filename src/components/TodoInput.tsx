"use client";

import React, { useState } from "react";
import styled from "@emotion/styled";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

const Input = styled.input`
  width: 100%;
  padding: 32px;
  font-size: 20px;
  border: none;
  border-radius: 24px;
  background-color: #e5e5e5;
  &::placeholder {
    color: #b9b9b9;
  }
  &:focus {
    outline: none;
  }
`;

const TitleInputContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim().length > 0 && text.length <= 20) {
      onAdd(text.trim());
      setText("");
    } else if (text.length > 20) {
      alert("할 일은 20글자를 넘길 수 없습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TitleInputContainer>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일을 입력해 주세요"
          maxLength={20}
        />
      </TitleInputContainer>
    </form>
  );
};
