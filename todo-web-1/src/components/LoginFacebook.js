import React, { Component } from "react";
import {Button} from "react-bootstrap";
import { loginFacebookUser} from "../stitch/authentication";
import { app } from "./../stitch/stitch";


if (app.auth.hasRedirectResult()) {
  console.log("hasRedirectResult, user");
  app.auth.handleRedirectResult().then(user => {
    console.log(user);
  });
} else {
  console.log("Failed to get a redirect result from Facebook")
}

//export default class Login extends Component {
export default function FacebookForm(props) {
   const handleSubmit = event => {
    event.preventDefault();
    loginFacebookUser().then(() => {
      window.location.reload();
    });
  }

  //render() {
    return (
      <div className="LoginFacebook">
        <form onSubmit={handleSubmit}>
          <Button
            block
            type="submit"
          >
            Login Using Facebook
          </Button>
        </form>
      </div>
    );
  //}
}
