import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();
    

    const onClick= () => {
        console.log(inputRef)
        inputRef.current.select();
    }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        className="form-control"
        type="text"
        placeholder="ingrese su nombre"
      />
      

      <button className="btn btn-primary" style={{ marginTop: "20px" }} onClick={onClick}>
        set focus
      </button>
    </>
  );
};
