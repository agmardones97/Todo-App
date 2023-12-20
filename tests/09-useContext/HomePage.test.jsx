import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en el componente <HomePage>", () => {
  const user = {
    id: 4,
    nombre: "Alfonso",
  };

  test("debe de mostrar el componente sin el usuairo", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    

    
  });

  test("debe de mostar el componente CON el usuario", () => {
    render(
      <UserContext.Provider value={{user}}>
        <HomePage />
      </UserContext.Provider>
    );
    screen.debug();
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain(user.nombre)
    expect(preTag.innerHTML).toContain(user.id.toString())

  });
});
