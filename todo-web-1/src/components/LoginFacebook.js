import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { app } from "./../stitch/stitch";
import { FacebookRedirectCredential } from "mongodb-stitch-browser-sdk";
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

  handleSubmit = event => {};

  render() {
    return (
      <div className="LoginFacebook">
        <form onSubmit={this.handleSubmit}>
          <Button block type="submit">
            Log in Using Facebook
          </Button>
        </form>
      </div>
    );
  }
}
