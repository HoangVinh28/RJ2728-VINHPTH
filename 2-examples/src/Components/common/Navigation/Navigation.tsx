import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Navigation.module.css";

interface IProps {
  setIsLogin: (value: boolean) => void;
}
function Navigation(props: IProps) {
  const { setIsLogin } = props;
  return (
    <>
    <ul className={Styles.navigation}>
      <li>
        <Link to={"/"} className={Styles.link}>
          LIST
        </Link>
      </li>
      <li>
        <Link to={"/form"} className={Styles.link}>
          FORM
        </Link>
      </li>
      <li>
        <Link to={"/detail"} className={Styles.link}>
          DETAIL
        </Link>
      </li>
    </ul>
    <button onClick={()=>setIsLogin(false)}>Logout</button>
    </>
  );
}

export default Navigation;
