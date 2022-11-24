import { BrowserRouter as Router, Route, Routes as Switch, Navigate } from 'react-router-dom';
import PrivateRoute from '@components/PrivateRoute';
import Login from '@views/Login';
import Home from '@views/Home';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/login' element={<Login />} />
        <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>} />
      </Switch>
    </Router>
  );
}

export default Routes;
