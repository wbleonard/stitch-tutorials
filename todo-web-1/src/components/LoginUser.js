import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Card, CardBody } from "reactstrap";
import styled from "@emotion/styled";
import { loginEmailPasswordUser } from "../stitch/authentication";

const LoginCard = styled(Card)`
  background-color: #383a3f !important;
  background-color: #3e4348 !important;
  background-color: #1f2124 !important;
  background-color: #011627 !important;
`;
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.email);
    loginEmailPasswordUser(this.state.email, this.state.password).then(() => {
      window.location.reload();
    });
  };

  render() {
    return (
      <div className="Login">
        <LoginCard inverse color="dark">
          <CardBody>
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email">
                <FormLabel>Email</FormLabel>
                <FormControl
                  autoFocus
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="password">
                <FormLabel>Password</FormLabel>
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>
              <Button block disabled={!this.validateForm()} type="submit">
                Log in as User
              </Button>
            </form>
          </CardBody>
        </LoginCard>
      </div>
    );
  }
}
