import React from "react";
//import logo from './logo.svg';
import "./App.css";
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
