import { IUserWithToken } from "@store/Slices/secSlice";
import { RootState } from "@store/store";
import { useSelector } from "react-redux";

const Home = () => {
  const data = useSelector<RootState,IUserWithToken>(state=>state.user)
  return (
    <>
    <h1>Hola Mundo</h1>
    <pre>{JSON.stringify(data,null,2)}</pre>
    </>
  );
}
export default Home;
