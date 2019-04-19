import React from "react";
import styled from "@emotion/styled";
import TodoList from "./TodoList";
import Banner from "./Banner";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ConfirmUser from "./ConfirmUser";
import ConfirmUserAPI  from "./ConfirmUserAPI";

const AppLayout = styled.div`
  display: grid;
  grid-template-areas:
    "banner banner banner"
    "search list detail";
  grid-template-rows: 140px 1fr;
  grid-template-columns: 5fr 1fr;
  width: 100vw;
  min-height: 100vh;
  background: #5e9668;
`;

App.propTypes = {
  children: PropTypes.node
};

export default function App(props) {

  return (
    <Router>
      <AppLayout>
        <Banner>
          <Navbar />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/confirm/">Confirm</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={TodoList} />
          <Route path="/confirm/" component={ConfirmUser} />
          <Route path="/confirmAPI/" component={ConfirmUserAPI} />
        </Banner>
        
      </AppLayout>
    </Router>
  );
}
