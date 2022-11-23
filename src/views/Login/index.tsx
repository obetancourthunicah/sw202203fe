import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "@store/Services/Security";
import { setSecData } from "@store/Slices/secSlice";
import Page from "@components/Page";
import { PrimaryButton } from "@components/Buttons/PrimaryButton";
const Login = () => {
  const [login, { isLoading, status, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const Navigator = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    const { data } = await login({ email: "user", password: "password" }).unwrap();
    dispatch(setSecData(data));
    Navigator("/home");
  }
  return (
    <Page>
      <h1>Login</h1>
      <p>Implement a Login Page</p>
      {error && <p>{JSON.stringify(error)}</p>}
      <PrimaryButton onClick={handleClick}>Login</PrimaryButton>
    </Page>
  );
}

export default Login;
