import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "@store/Services/Security";
import { setUserData } from "@store/Slices/secSlice";
import Page from "@components/Page";
import { PrimaryButton } from "@components/Buttons";
const Login = () => {
  const [signIn, { isLoading, status, error }] = useSignInMutation();
  const dispatch = useDispatch();
  const Navigator = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    const data = await signIn({ email, password }).unwrap();
    console.log({ data });

    dispatch(setUserData(data));
    Navigator("/home");
  };
  const handleOnChangeEmail: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setEmail(value);
  };
  const handleOnChangePassword: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setPassword(value);
  };
  return (
    <Page>
      <h1>Login</h1>
      <form className="my-2">
        <input
          className="input"
          autoComplete="current-password"
          type={"text"}
          placeholder="email"
          value={email}
          required
          onChange={handleOnChangeEmail}
        />
        <input
          type={"password"}
          className="input"
          placeholder="password"
          required
          onChange={handleOnChangePassword}
        />
      </form>
      {error && <p>{JSON.stringify(error)}</p>}
      <PrimaryButton onClick={handleClick}>Login</PrimaryButton>
    </Page>
  );
};

export default Login;
