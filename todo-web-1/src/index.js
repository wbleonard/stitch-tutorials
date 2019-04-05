import React from "react";
import ReactDOM from "react-dom";
import { app, isLoggedIn, loginAnonymous, logoutUser } from "./stitch";
import LoginAnon from "./components/LoginAnon";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

function MyApp(props) {
  return isLoggedIn() ? (
    <App handleLogout={() => logoutUser(app.currentUser)} />
  ) : (
    <div>
      <LoginAnon loginAnonymous={loginAnonymous} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MyApp />, rootElement);
