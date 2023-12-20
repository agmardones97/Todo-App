import { useEffect, useState } from "react";
import {Message} from "./Message"

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'alfonso',
        email: 'agmardones@correo.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]:value
        })
    }

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
      <h1>Simple Form</h1>
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
        style={{marginTop:"20px"}}
        className="form-control mt-2"
        placeholder="correo@gmail.com"
        name="email"
        value={email}
        onChange={(e) => onInputChange(e)}
      />
      
    {
        (username === "alfonso") && <Message />
    }
      

    </>
  );
};

export default SimpleForm;
