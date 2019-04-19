import React, { Component } from "react";
import {
  Button,
  FormGroup,
  FormControl,
  FormLabel
} from "react-bootstrap";
import { Card, CardBody } from "reactstrap";
import styled from "@emotion/styled";
import confirmUser from "../stitch/authentication";

const LoginCard = styled(Card)`
  background-color: #383a3f !important;
  background-color: #3e4348 !important;
  background-color: #1f2124 !important;
  background-color: #011627 !important;
`;
export default class Confirm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      tokenId: "",
      message: ""
    };
  }

  validateForm() {
    return this.state.token.length > 0 && this.state.tokenId.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.token);

    confirmUser(this.state.token, this.state.tokenId)
      .then(() => {
        this.setState({message:"Successfully confirmed user's email"});
      })
      .catch(err => {
        console.log("Error confirming new user:", err);
        this.setState({message:err.message});
      });
  };

  render() {
    return (
      <div className="ConfirmUser">
        <LoginCard inverse color="dark">
          <CardBody>
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="token">
                <FormLabel>Token</FormLabel>
                <FormControl
                  autoFocus
                  type="text"
                  value={this.state.token}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="tokenId">
                <FormLabel>TokenId</FormLabel>
                <FormControl
                  value={this.state.tokenId}
                  onChange={this.handleChange}
                  type="text"
                />
              </FormGroup>
              <Button block disabled={!this.validateForm()} type="submit">
                Confirm User
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
