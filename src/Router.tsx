import { BrowserRouter as Router, Route, Routes as Switch, Navigate } from 'react-router-dom';
import PrivateRoute from '@components/PrivateRoute';
import Login from '@views/Login';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/login' element={<Login />} />
        <Route path="/home" element={<PrivateRoute><h1>Data</h1></PrivateRoute>} />
      </Switch>
    </Router>
  );
}

export default Routes;
