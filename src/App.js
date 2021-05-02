import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import PrivateRoute from "./screens/PrivateRoute";
import ForgotPassword from "./screens/ForgotPassword";
import UpdateProfile from "./screens/UpdateProfile";
import Signup from "./screens/Signup";
import Notes from "./screens/Notes";
import "./fonts.css";
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <Container
      // className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="w-100"
        // style={{ maxWidth: "400px" }}
      >
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Notes} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/forgot" component={ForgotPassword} />
              <Route path="/" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
