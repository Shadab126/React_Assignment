import React from "react";

function Footer({ length }) {
  return (
    <div>
      <footer>
        <h1> {length}  {length <= 1  ? "Task Availabe" : "Tasks Availabe"}</h1>
      </footer>
    </div>
  );
}

export default Footer;
