import React from "react";

function Header({ title }) {
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
    </div>
  );
}

Header.defaultProps = {
  title: "Default Title",
};

export default Header;
