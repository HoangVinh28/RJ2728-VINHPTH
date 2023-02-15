//import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "../../common/Navigation/Navigation";
import UserDetail from "./Detail/UserDetail";
import UserForm from "./Form/UserForm";
import List from "./List/List";


interface IProps {
  setIsLogin: (value: boolean) => void;
}

function BaseWebRouter(props: IProps) {
  const { setIsLogin } = props;
  return (
    <BrowserRouter>
     <Navigation setIsLogin={setIsLogin}/>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail/:id" element={<UserDetail />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/form/:id" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default BaseWebRouter;
