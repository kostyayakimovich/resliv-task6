import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
const Header = () => {
  let history = useHistory();
  const onClick = (path) => {
    history.push(`/${path}`);
  };

  return (
    <>
      <header className="header">
        <h1 className="logo" onClick={() => onClick("main")}>Task6</h1>
        <nav className="navigation">
          <li className="menu-link" onClick={() =>
            onClick("main")}>main</li>
          <li className="menu-link" onClick={() =>
            onClick("employees")}>employees</li>
        </nav>
      </header>
    </>
  );
};
export default Header;