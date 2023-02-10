import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UserDetail from "./Detail/UserDetail";
import UserForm from "./Form/UserForm";
import List from "./List/List";
import Styles from "../User/BaseWebRouter.module.css"

function BaseWebRouter() {
  return (
    <BrowserRouter>
    <ul className={Styles.navigation}>
        <li>
        <Link to={"/"} className={Styles.link}>LIST</Link>
        </li>
        <li><Link to={"/form"} className={Styles.link}>FORM</Link></li>
        <li><Link to={"/detail"} className={Styles.link}>DETAIL</Link></li>
    </ul>
    
    
    
      <Routes>
        <Route path="/" element={<List/>}/>
        <Route path="/detail/:id" element={<UserDetail/>}/>
        <Route path="/form" element={<UserForm/>}/>
        <Route path="/form/:id" element={<UserForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default BaseWebRouter;
