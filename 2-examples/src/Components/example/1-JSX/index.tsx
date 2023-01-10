import React from "react";
import "./index.module.css";
const JSX = () => {
  window.addEventListener(
    "resize",
    function () {
      console.log(window.innerWidth, window.innerHeight);
      let elm = document.getElementById("div__right");
      if (elm) {
        elm.style.margin = window.innerWidth < 800 ? "auto" : "";
      }
    },
    true
  );
  return (
    <React.Fragment>
      <header className="bg-ccc p-3">
        <h1>The Pulpit Rock</h1>
      </header>
      <div className="row">
        <div className="col-12 col-md-3 col-content">
          <p className="name1 p-3 mx-3">The Drive</p>
          <p className="name2 p-3 mx-3">The Walk</p>
          <p className="name3 p-3 mx-3">The Return</p>
          <p className="name4 p-3 mx-3">The End</p>
        </div>
        <div className="col-12 col-md col-content">
          <h1 className="name5">The Walk</h1>
          <p>
            The walk to the Pulpit Rock will take you approximately two hours,
            give or take an hour depending on the weather conditions and your
            physical shape.
          </p>
          <img
            className="name_img"
            src={
              "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            }
            alt="..."
          ></img>
        </div>
        <div className="col-12 col-md-3 col-content">
          <div className="name6 p-3">
            <h2>What?</h2>
            <p>
              The Pulpit Rock is a part of a mountain that looks like a pulpit.
            </p>
            <h2>Where?</h2>
            <p>The Pulpit Rock is in Norway</p>
            <h2>Price?</h2>
            <p>The walk is free!</p>
          </div>
        </div>
      </div>
      <footer className="bg-ccc text-center">
        This web page is a part of a demonstration of fluid web design made by
        www.w3schools.com. Resize the browser window to see the content response
        to the resizing.
      </footer>
    </React.Fragment>
  );
};
export default JSX;
