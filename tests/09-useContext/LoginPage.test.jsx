import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("Pruebas en <LoginPage>", () => {
  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const getPre = screen.getByLabelText("pre");
    expect(getPre.innerHTML).toBe("null");
  });

  test("debe de llamar el setUser cuando se hace click en el botón", () => {
    const setUserMock = jest.fn()
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const button = screen.getByRole('button')
    fireEvent.click(button);
    expect(setUserMock).toHaveBeenCalledWith({"email": "agmardones97@gmail.com", "id": 123, "name": "Alfonso Mardones"})
  });
});
