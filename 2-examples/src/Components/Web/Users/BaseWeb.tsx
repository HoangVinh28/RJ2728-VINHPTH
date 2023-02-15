//import Styles from "./BaseWeb.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "../common/Navigation/Navigation";
import BookDetail from "./Detail/BookDetail";
import BookForm from "./Form/BookForm";
import BookHome from "./Home/BookHome";
import BookList from "./List/BookList";



interface IProps {
    setIsLogin: (value: boolean) => void;
  }
  
  function BaseWeb(props: IProps) {
    const { setIsLogin } = props;
    return (
      <BrowserRouter>
       <Navigation setIsLogin={setIsLogin}/>
        <Routes>
          <Route path="/" element={<BookHome />} />
          <Route path="/list" element={<BookList />} />
          <Route path="/list/detail/:id" element={<BookDetail />} />
          <Route path="/form" element={<BookForm />} />
          <Route path="/list/form/:id" element={<BookForm />} />
          <Route path="*" element={
            <p>404 Page not found</p>
          } />
        </Routes>
      </BrowserRouter>
    );
  }
  export default BaseWeb;