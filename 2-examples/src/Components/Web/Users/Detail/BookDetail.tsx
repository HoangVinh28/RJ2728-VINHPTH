//import "./UserDetail.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../common/Footer/Footer";

type Props = {};
interface IBooking {
  price1: string;
  price2: string;
  id: string | number;
  roomnumber: string;
}

function BookDetail() {
  let params = useParams();
  const [booking, setBooking] = useState<IBooking | undefined>({
    price1: "500",
    price2: "350",
    id: 4,
    roomnumber: "",
  });
  useEffect(() => {
    if (params.id) {
        getUser(params.id);
      }
  }, []);
  const getUser = (userId : string) => {
    const url =
      "https://63a06c2de3113e5a5c3d35ba.mockapi.io/tickets/" + userId;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.error("Success", data);
        setBooking(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  return (
    <>
    <table className="table table-secondary table-striped mt-5">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Room Number</th>
          <th scope="col">Price for 1 night</th>
          <th scope="col">Price for 1 day</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{booking?.id}</th>
          <th>{booking?.roomnumber}</th>
          <th>{booking?.price1}</th>
          <th>{booking?.price2}</th>
        </tr>
      </tbody>
    </table>
    <Footer />;
    </>
    
  );
}

export default BookDetail;
