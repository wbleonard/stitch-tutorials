import {
  UserPasswordCredential,
  AnonymousCredential,
} from "mongodb-stitch-browser-sdk";
import { app } from "./stitch.js";

// Log in a user with the specified email and password
// Note: The user must already be registered with the Stitch app.
// See https://docs.mongodb.com/stitch/authentication/userpass/#create-a-new-user-account
export function loginEmailPasswordUser(email, password) {
  return app.auth
    .loginWithCredential(new UserPasswordCredential(email, password))
    .then(stitchUser => {
      console.log(`Logged in as: ${email}`);
      return stitchUser;
    });
}

// Log in a user anonymously.
// Note: When the user logs out, all data is lost.
// See https://docs.mongodb.com/stitch/authentication/anonymous/
export function loginAnonymous() {
  return app.auth
    .loginWithCredential(new AnonymousCredential())
    .then(stitchUser => {
      console.log(`Logged in as Anonymous`);
      return stitchUser;
    });
}

export function hasLoggedInUser() {
  return app.auth.isLoggedIn;
}

export function getAllUsers() {
  // Return a list of all users that are associated with the app
  return app.auth.listUsers();
}

export function logoutUser(stitchUser) {
  // Log a user out of the app. Logged out users are still associated with
  // the app and will appear in the result of app.auth.listUsers()
  return app.auth.logoutUserWithId(stitchUser.id);
}

export function isLoggedIn() {
  return app.auth.isLoggedIn;
}
