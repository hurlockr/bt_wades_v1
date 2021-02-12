import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <li key="sign-in">
      <Link to="/user-sessions/new">Sign In</Link>
    </li>,
    <li key="sign-up">
      <Link to="/users/new" className="button">
        Sign Up
      </Link>
    </li>,
  ];

  const authenticatedListItems = [
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ];

  return (
    <div className="top-bar topbar-center-logo" id="topbar-center-logo">
      <div className="top-bar-left">
        <ul className="menu vertical medium-horizontal">
          {/* <li className="menu-text">The Wonderful Horrible Dates App</li> */}
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-center">
        <div className="logo">
          <a><img src="https://placehold.it/100x39" alt="Wades Logo" /></a>
        </div>
      </div>
      <div className="top-bar-right">
        <ul className="menu vertical medium-horizontal">{user ? authenticatedListItems : unauthenticatedListItems}</ul>
      </div>
    </div>
  );
};

export default TopBar;