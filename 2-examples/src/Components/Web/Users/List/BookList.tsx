import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../common/Footer/Footer";
type Props = {};

interface IBooking {
  price1: string;
  price2: string;
  id: string | number;
  roomnumber: string;
}

function BookList(props: Props) {
  const navigate = useNavigate();
  const [listBooking, setListBooking] = useState<Array<IBooking>>([]);

  useEffect(() => {
    getListUser();
  }, []);
  const getListUser = () => {
    const url = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/tickets";
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
  const handleDelete = (userId: string | number) => {
    const url = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/tickets/" + userId;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        getListUser();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDetail = (userId: string | number) => {
    console.log("handleDetail", userId);
    navigate(`detail/${userId}`);
  };

  const handleUpdate = (userId: string | number) => {
    console.log("handleDetail", userId);
    navigate(`form/${userId}`);
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
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {listBooking.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <th>{item.roomnumber}</th>
              <th>{item.price1}</th>
              <th>{item.price2}</th>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleUpdate(item.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => handleDetail(item.id)}
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />;
    </>
  );
}

export default BookList;
