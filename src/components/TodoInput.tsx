"use client";

import React, { useState } from "react";
import styled from "@emotion/styled";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
`;

export const TodoInput: React.FC<TodoInputProps> = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {};

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력해주세요"
        maxLength={20}
      />
    </form>
  );
};
