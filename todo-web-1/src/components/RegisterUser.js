import React, { Component } from "react";
import {
  Button,
  FormGroup,
  FormControl,
  FormLabel
} from "react-bootstrap";
import { Card, CardBody } from "reactstrap";
import styled from "@emotion/styled";
import { registerUser, resendConfirmationEmail } from "../stitch/authentication";

const LoginCard = styled(Card)`
  background-color: #383a3f !important;
  background-color: #3e4348 !important;
  background-color: #1f2124 !important;
  background-color: #011627 !important;
`;

export default class RegisterUser extends Component {
  constructor(props) {
    super(props);

    this.handleResendEmail = this.handleResendEmail.bind(this);

    this.state = {
      email: "",
      password: "",
      message: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  validateEmail() {
    return this.state.email.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.email);

    registerUser(this.state.email, this.state.password)
      .then(() => {
        this.setState({message:"Successfully sent account confirmation email"});
      })
      .catch(err => {
        console.log("Error registering new user:", err.message);
        this.setState({message:err.message});
      });
  };

  handleResendEmail() {
    resendConfirmationEmail(this.state.email)
    .then(() => {
      this.setState({message:"Successfully resent account confirmation email"});
    })
    .catch(err => {
      console.log("Error resending account confirmation email:", err.message);
      this.setState({message:err.message});
    });
}  

  render() {
    return (
      <div className="RegisterLogin">
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
                Register User
              </Button>
              <Button block disabled={!this.validateEmail()} onClick={this.handleResendEmail} >
                Resend Confirmation
              </Button>
              <div>
                <br />
                {this.state.message}
              </div>
            </form>
          </CardBody>
        </LoginCard>
      </div>
    );
  }
}
