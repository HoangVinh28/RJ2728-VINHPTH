//import Styles from "./Navigation.module.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
//import Footer from "../Footer/Footer";

interface IProps {
  setIsLogin: (value: boolean) => void;
}
function Navigation(props: IProps) {
  const navigate = useNavigate();
  const { setIsLogin } = props;
  const handleUpdate = () => {
    setIsLogin(false);
    navigate(`/`);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/form"} className="nav-link">
                  Form
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/detail"} className="nav-link">
                  Detail
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/list"} className="nav-link">
                  List
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-end">
            <form className="d-flex  " role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success " type="submit">
                Search
              </button>
            </form>
            <button onClick={handleUpdate} className="btn btn-outline-success">
              Đăng xuất
            </button>
          </div>
        </div>
      </nav>
      <Header />
    </>
  );
}

export default Navigation;
