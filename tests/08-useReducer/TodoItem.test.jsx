import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/components/TodoItem";

describe("Pruebas en <TodoItem/>", () => {
  const todo = {
    id: 1,
    description: "Piedra del alma",
    done: false,
  };

  const onDeletetodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("Debe de mostrar el Todo Pendiente de completar", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeletetodo={onDeletetodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
  });

  test("Debe de mostrar el TODO completado", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeletetodo={onDeletetodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("El span debe de llamar el ToggleTodo cuando se hace click", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeletetodo={onDeletetodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("El button debe llamar el deleteTodo", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeletetodoMock}
      />
    );
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onDeletetodoMock).toHaveBeenCalledWith(todo.id);
  });
});
