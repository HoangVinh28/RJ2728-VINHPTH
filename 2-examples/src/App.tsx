import React from "react";
//import logo from './logo.svg';
/* import "./App.css";
import anh from "./image/my.jpg";
function App() {
  return (
    <div className="container">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={anh} className="img-fluid rounded-start" alt="..."></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-danger">Hoàng Vinh</h5>
              <p className="card-text">
                Sinh viên Chuyên ngành Công nghệ phần mềm Khoa Công nghệ thông
                tin Đại Học Duy Tân
              </p>
              <p className="card-text">
                <small className="text-muted">Update : 04/01/2023</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
 */
import "./App.css";
//import BlockUI from "./Components/example/Session03/State";
//import BlockUIClass from "./Components/example/Session03/StateClass";
//import LikeButton from "./Components/homeworks/session03/LikeButton";
import RateBtn from "./Components/homeworks/session03/RateBtn";
//import JSX from "./Components/example/1-JSX"
//import BlockUI1 from "./Components/homeworks/session02/BlockUI1/BlockUI1";
function App() {
  return (
    <>
      {/* <JSX /> */}
      {/* <BlockUI1 title={"Banwidth"} bgTitle="red" percent={20} bgProcess="orange" />
      <BlockUI1 title={"Storage"} bgTitle="cyan" percent={50} bgProcess="orange" />
      <BlockUI1 title={"Users"} bgTitle="green" percent={70} bgProcess="orange" />
      <BlockUI1 title={"Visitors"} bgTitle="yellow"  percent={30} bgProcess="orange" />
      <BlockUI1 title={"Emails"} bgTitle="purple" percent={45} bgProcess="orange" />
      <BlockUI1 title={"Basic"} bgTitle="magenta" percent={80} bgProcess="orange" />
      <BlockUI1 title={"Others"} bgTitle="blue" percent={37} bgProcess="orange" /> */}
     {/*  <BlockUI  /> */}
    {/*  <BlockUIClass  /> */}
    {/*  < LikeButton/> */}
    <RateBtn/>
    </>
  );
}
export default App;
