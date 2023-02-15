import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../common/Footer/Footer";

type Props = {};

interface IBooking {
  name: string;
  avatar: "https://hotel.web4s.vn/wp-content/uploads/2017/08/blog-7.jpg";
  id: string | number;
  title: string;
}

function BookHome(props: Props) {
  //const navigate = useNavigate();
  const [listBooking, setListBooking] = useState<Array<IBooking>>([]);

  useEffect(() => {
    getListBooking();
  }, []);
  const getListBooking = () => {
    const url = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/cars";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setListBooking(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  /* const handleUpdate = (userId: string | number) => {
    console.log("handleDetail", userId);
    navigate(`form/${userId}`);
  }; */
  return (
    <>
    <div className="d-flex justify-content-evenly ">
    {listBooking.map((item) => (
        <div key={item.id} >
          <div className="card mt-5 mb-5" style={{ width: "18rem" }}>
            <img src={item.avatar} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.title}</p>
              <a href="" className="btn btn-danger">
              <Link to={"/list"} className="nav-link">
              READ MORE
                </Link>
               
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
      
      <Footer />;
    </>
  );
}

export default BookHome;
