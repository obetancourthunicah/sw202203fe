import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectAuth } from "@store/Slices/secSlice";
import { PropsWithChildren } from "react";
const PrivateRoute = ({ children } : PropsWithChildren) => {
  const user = useSelector(selectAuth);
  if (user) {
    try {
      const { token } = user;
      if (!token) {
        return <Navigate to="/login" replace />
      }
    } catch (ex) {
      return <Navigate to="/login" replace />
    }
  } else {
    return <Navigate to="/login" replace />
  }
  return children ? <>{children}</> : <Outlet />;
}

export default PrivateRoute;
