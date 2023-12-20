import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("Pruebas en <MainApp>", () => {
  test("Debe de mostar el HomePage por defecto", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    // screen.debug();
    expect(screen.getByText("HomePage:")).toBeTruthy();
  });

  test("Debe de mostar el Login Page", () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );
    screen.debug()
    expect(screen.getByText('LoginPage:')).toBeTruthy()

  });
});
