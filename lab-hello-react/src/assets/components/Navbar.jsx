import React from "react";
import ironhackLogo from "lab-hello-react/src/assets/ironhack-logo-xs.png";
import menuTop from "lab-hello-react/src/assets/menu-top-xs.png";
class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <img src={ironhackLogo} alt="ironhack logo" />
        <img src={menuTop} alt="ironhack logo" />
        <div>
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library and
            become as super Ninja developer.
          </p>
        </div>
      </nav>
    );
  }
}

export default Navbar;
