import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { loginFacebookUser } from "../stitch/authentication";
import { app } from "./../stitch/stitch";
import {  FacebookRedirectCredential} from "mongodb-stitch-browser-sdk";

/*
if (app.auth.hasRedirectResult()) {
  console.log("hasRedirectResult, user:");
  app.auth.handleRedirectResult().then(user => {
    console.log(user);
  });
} else {
  console.log("Failed to get a redirect result from Facebook");
}*/

export default class Login extends Component {
  async componentDidMount() {
    console.log("Component did mount");

    if (app.auth.hasRedirectResult()) {
      await app.auth.handleRedirectResult();
      return;
    }

    if (!app.auth.isLoggedIn) {
      const credential = new FacebookRedirectCredential();
      await app.auth.loginWithRedirect(credential);
      return;
    }
  }

  handleSubmit = event => {
    //event.preventDefault();
    //loginFacebookUser().then(() => {
    //  window.location.reload();
    //});
  };

  render() {
    return (
      <div className="LoginFacebook">
        <form onSubmit={this.handleSubmit}>
          <Button block type="submit">
            Login Using Facebook
          </Button>
        </form>
      </div>
    );
  }
}
