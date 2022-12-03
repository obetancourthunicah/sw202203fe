import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "@components/PrivateRoute";
import Login from "@views/Login";
import SignUp from "@views/SignUp";
import Home from "@views/Home";
import CashFlow from "@views/CashFlow";
import CashFlowNew from "@views/CashFlowNew";
import ChartsExamples from "@views/ChartsExamples";
import NotFound from "@views/NotFound";
import CashFlowDetail from "@views/CashFlowDetail";
import CashFlowAdmin from "@views/CashFlowAdmin";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/charts" element={<ChartsExamples />} />
        <Route
          path="/home"
          element={
            <PrivateRoute allowedRoles={["public","admin"]}>
              <Home />
            </PrivateRoute>
          }
        />
         <Route
          path="/cashflow"
          element={
            <PrivateRoute allowedRoles={["public","admin"]}>
              <CashFlow />
            </PrivateRoute>
          }
        />
        <Route
          path="/cashflow/new"
          element={
            <PrivateRoute allowedRoles={["public","admin"]}>
              <CashFlowNew />
            </PrivateRoute>
          }
        />
         <Route
          path="/cashflow/:id"
          element={
            <PrivateRoute allowedRoles={["public","admin"]}>
              <CashFlowDetail />
            </PrivateRoute>
          }
        />
         <Route
          path="/admin/cashflow"
          element={
            <PrivateRoute allowedRoles={["public","admin"]}>
              <CashFlowAdmin />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </Router>
  );
};

export default Routes;
