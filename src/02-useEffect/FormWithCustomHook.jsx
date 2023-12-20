import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } =
    useForm({
      username: "",
      email: "",
      password: " ",
    });

  // const {username, email, password} = formState;

  // useEffect(() => {
  //     console.log("useEffect called!")
  // }, []);

  // useEffect(() => {
  //     console.log("formState Changed!")
  // }, [formState]);

  // useEffect(() => {
  //     console.log("email Changed!")
  // }, [email]);

  return (
    <>
      <h1>Form With Custom Hooks</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={(e) => onInputChange(e)}
      />

      <input
        type="email"
        style={{ marginTop: "20px" }}
        className="form-control mt-2"
        placeholder="correo@gmail.com"
        name="email"
        value={email}
        onChange={(e) => onInputChange(e)}
      />

      <input
        type="password"
        style={{ marginTop: "20px" }}
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={(e) => onInputChange(e)}
      />
      <div className="container">
        <button
          style={{ marginTop: "20px" }}
          className="btn btn-primary"
          onClick={onResetForm}
        >
          Reset Form
        </button>
      </div>
    </>
  );
};

export default FormWithCustomHook;
