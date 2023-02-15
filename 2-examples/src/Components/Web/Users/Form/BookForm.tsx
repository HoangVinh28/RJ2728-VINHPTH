import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../common/Footer/Footer";
//let ID = 2;

function BookForm() {
  let params = useParams();
  const [price1, setPrice1] = useState<string>();
  const [price2, setPrice2] = useState<string>();
  const [roomNumber, setRoomNumber] = useState<string>();

  useEffect(() => {
    if (params.id) {
      getUser(params.id);
    }
  }, []);

  const getUser = (userId: string) => {
    const url = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/tickets/" + userId;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.error("Success", data);
        setPrice1(data.price1);
        setPrice2(data.price2);
        setRoomNumber(data.roomnumber);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // event of form
    e.preventDefault();
    console.log("handleSubmit", price1);
    console.log("handleSubmit:", price2);
    console.log("handleSubmit:", roomNumber);
    if (params.id) {
      updateUser(price1, price2, roomNumber);
      console.log("updateUser", "updateUser");
    } else {
      createUser(price1, price2, roomNumber);
      console.log("createUser", "createUser");
    }
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setPrice1(e.target.value);
  };

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempvalue = e.target.value;
    console.log(e.target.value);
    setPrice2(tempvalue);
  };
  const handleRoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempvalue = e.target.value;
    console.log(e.target.value);
    setRoomNumber(tempvalue);
  };

  const createUser = (
    price1: string | undefined,
    price2: string | undefined,
    roomNumber: string | undefined
  ) => {
    console.log(price1, price2, roomNumber);
    const url = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/tickets";
    const data = {
      price1: price1,
      price2: price2,
      roomNumber: roomNumber,
    };

    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const updateUser = (
    price1: string | undefined,
    price2: string | undefined,
    roomNumber: string | undefined
  ) => {
    console.log(price1, price2, roomNumber);
    const url =
      "https://63a06c2de3113e5a5c3d35ba.mockapi.io/tickets/" + params.id;
    const data = {
      price1: price1,
      price2: price2,
      roomNumber: roomNumber,
    };

    fetch(url, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-50 mx-auto border border-success mt-5 mb-5"
      >
        <h3 className="text-success ms-5 mb-5">IMPORT INFORMATION</h3>
        <div className="mb-3 ms-5 me-5">
          <label className="form-label">Room Number</label>
          <input
            className="form-control"
            type="text"
            name="roomNumber"
            defaultValue={roomNumber}
            onChange={handleRoom}
          />
        </div>

        <div className="mb-3 ms-5 me-5">
          <label className="form-label">Price for 1 night</label>
          <input
            className="form-control"
            type="text"
            name="price1"
            defaultValue={price1}
            onChange={handleName}
          />
        </div>
        <div className="mb-3 ms-5 me-5">
          <label className="form-label">Price for 1 day</label>
          <input
            className="form-control"
            type="text"
            name="price2"
            defaultValue={price2}
            onChange={handleAge}
          />
        </div>

        <button type="submit" className="btn btn-primary ms-5 mb-5">
          Submit
        </button>
      </form>
      <Footer />;
    </>
  );
}
export default BookForm;
