import React, { Component } from "react";
import confirmUser from "../stitch/authentication";


export default class ConfirmAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      tokenId: ""
    };
  }
  componentDidMount() {
    let location = window.location;
    let params = new URLSearchParams(location.search);
    let token = params.get("token");
    let tokenId = params.get("tokenId");

    confirmUser(token, tokenId)
      .then(() => {
        this.setState({ message: "Successfully confirmation user's email" });
      })
      .catch(err => {
        console.log("Error confirming new user:", err);
        this.setState({ message: err.message });
      });
  }

  render() {
    return <div className="ConfirmUserAPI" />;
  }
}
