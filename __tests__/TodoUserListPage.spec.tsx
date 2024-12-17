import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TodoUserListPage } from "../src/components/pages/TodoUserListPage";

describe("TodoUserListPage", () => {
  beforeEach(() => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  it("render todo list page", () => {
    render(<TodoUserListPage />);
    expect(screen.getByText("To Do List")).toBeInTheDocument();
  });

  it("add todo item", async () => {
    render(<TodoUserListPage />);
    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.submit(input);
    await waitFor(() =>
      expect(screen.getByText("New Todo")).toBeInTheDocument()
    );
  });

  it("todo longer than 20 characters", async () => {
    render(<TodoUserListPage />);
    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    fireEvent.change(input, {
      target: {
        value: "exceeds 20 characters",
      },
    });
    fireEvent.submit(input);
    await waitFor(() =>
      expect(
        screen.queryByText("exceeds 20 characters")
      ).not.toBeInTheDocument()
    );

    expect(window.alert).toHaveBeenCalledWith(
      "할 일은 20글자를 넘길 수 없습니다."
    );
  });

  it("completed todo item", async () => {
    render(<TodoUserListPage />);
    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    fireEvent.change(input, { target: { value: "Completed Todo" } });
    fireEvent.submit(input);
    await waitFor(() => screen.getByText("Completed Todo"));
    const completedButtons = screen.getAllByLabelText("checkbox");
    fireEvent.click(completedButtons[0]);
    const completedTodoItem = screen.getByTestId("todo-item-0");
    await waitFor(() => {
      expect(completedTodoItem.querySelector("span")).toHaveStyle(
        "color: #868686"
      );
    });
  });

  it("deletes a todo item", async () => {
    render(<TodoUserListPage />);
    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    fireEvent.change(input, { target: { value: "Delete Todo" } });
    fireEvent.submit(input);
    await waitFor(() => screen.getByText("Delete Todo"));
    const deleteButtons = screen.getAllByLabelText("delete");
    fireEvent.click(deleteButtons[0]);
    await waitFor(() =>
      expect(screen.queryByTestId("todo-item-0")).not.toBeInTheDocument()
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
