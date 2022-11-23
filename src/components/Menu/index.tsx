import { setShowMenu, selectShowMenu } from "@store/Slices/appSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import isAuthenticated from "../../Utilities/IsAuthenticated";

import "./Menu.css";

const Menu = () => {
  // const {
  //   security: { token },
  //   app: { showMenu },
  // } = useSelector((state) => state);
  const showMenu = useSelector(selectShowMenu);
  const dispatch = useDispatch();
  const classNames = showMenu ? "menu" : "menu hidden";
  const navigate = useNavigate();
  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setShowMenu(!showMenu));
    navigate((e.target as HTMLAnchorElement).getAttribute("href")||'');
  };
  const onLogoutHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    //dispatch({ type: "LOGIN_SIGNOUT", payload: null });
    //dispatch({ type: "APP_TOGGLE_MENU", payload: null });
    dispatch(setShowMenu(!showMenu));
    navigate("/login");
  };
  if (true) {
    return (
      <nav className={classNames}>
        <ul>
          <li>
            <a href="/login" onClick={(e)=>{}}>
              <i className="fas fa-sign-in-alt"></i>&nbsp;Iniciar Sesión
            </a>
          </li>
          <li>
            <a href="/signin" onClick={onClickHandler}>
              <i className="fas fa-user-plus"></i>&nbsp;Crear Cuenta
            </a>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className={classNames}>
        <ul>
          <li>
            <a href="/home" onClick={onLogoutHandler}>
              <i className="fas fa-sign-in-alt"></i>&nbsp;Cerrar Sesión
            </a>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Menu;
