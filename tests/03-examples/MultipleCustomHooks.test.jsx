import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter, useFetch } from "../../src/hooks";
import { } from "react-dom/test-utils";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks>", () => {

  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  })

  test("Debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);

    expect(screen.getAllByText("Loading..."));
    expect(screen.getAllByText("BreakingBad Quotes"));

    const nextButton = screen.getAllByRole("button", { name: "NextQuote" });
    expect(nextButton[0].disabled).toBeTruthy();
    // screen.debug();
  });

  test("Debe de mostrar un Quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Hola Mundo")).toBeTruthy();
    expect(screen.getByText("Fernando")).toBeTruthy();

    const nextButton = screen.getAllByRole("button", { name: "NextQuote" });
    expect(nextButton[0].disabled).toBeFalsy();
  });

  test("Debe de llamar la función de incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getAllByRole("button", { name: "NextQuote" });
    fireEvent.click(nextButton[0]);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
