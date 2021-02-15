import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";
import logo from "../../images/logo.png"

//if signin status = true then {data-reveal}

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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user-favorites">Favorite Places</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-center">
        <div className="logo">
          <Link to="/"><img src={logo} alt="Wades Logo" /></Link>
        </div>
      </div>
      <div className="top-bar-right">
        <ul className="menu vertical medium-horizontal">{user ? authenticatedListItems : unauthenticatedListItems}</ul>
      </div>
    </div>
  );
};

export default TopBar;