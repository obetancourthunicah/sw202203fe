import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "@store/Services/Security";
import { setSecData } from "@store/Slices/secSlice";

import Page from "@components/Page";
import { Field } from "@components/InputField";
import { PrimaryButton } from "@components/Buttons";
import ActionField from "@components/ActionField";
const Login = () => {
  const [login, { isLoading, status, error, ...mutRest }] = useLoginMutation();
  const dispatch = useDispatch();
  const Navigator = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    const  data = await login({ email, password }).unwrap();
    console.log(data);
    dispatch(setSecData(data));
    Navigator("/home");
  }
  console.log("Mutation Rest", JSON.stringify(mutRest, null , 2));
  return (
    <Page pageTitle="Login" useAbsoluteCenter>
      <section style={{minWidth:"480px", marginTop:"1rem"}}>
        <Field
          name="email"
          labelText="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Field
          name="password"
          labelText="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p>{JSON.stringify(error)}</p>}
        <ActionField align="right">
          <PrimaryButton onClick={handleClick}>Iniciar Sesión</PrimaryButton>
        </ActionField>
      </section>
    </Page>
  );
}

export default Login;
