import Styles from "./Header.module.css";

const Header: React.FC = () => {
  //const { setIsLogin } = props;
  //const { title } = props
  return (
    <>
      <header>
        {/* <h1 className="d-flex m-auto w-50">HOTEL BOOKING </h1> */}
        <img
          src="https://hotel.web4s.vn/wp-content/uploads/2017/06/parallax-9.jpg"
          alt="Pulpit rock"
          className={`row w-100 ${Styles.h_355} `}
        />
      </header>
      <div className="row">
        <div className="col-12 col-md-3 col-content mt-5">
          <p className="name1 p-3 mx-3">Home</p>
          <p className="name2 p-3 mx-3">Rooms</p>
          <p className="name3 p-3 mx-3">About Us</p>
          <p className="name4 p-3 mx-3">Contact</p>
          <button className="name4 p-3 mx-3 btn btn-success">Book Now</button>
        </div>
        <div className="col-12 col-md col-content">
          <h1 className="name5">Hotel Booking</h1>
          <p>
            Hello. Our hotel has been present for over 20 years. We make the
            best for all !
          </p>
          <div className={Styles.background_img}>
            <div className={Styles.box}>
              <div className="d-flex justify-content-center mt-5 ">
                <form className="d-flex  " role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Check in"
                    aria-label="Search"
                  />
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Check out"
                    aria-label="Search"
                  />
                  <button className="btn btn-primary " type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* <img
            className="name_img"
            src={
              "https://cattour.vn/images/upload/images/Vung%20Tau/homestay-vung-tau/amavihomestay5.png"
            }
            alt="..."
          ></img> */}
        </div>
         <div className="col-12 col-md-3 col-content">
          <div className=" p-3 bg-secondary text-white mt-5 h-50 ">
            <p className="d-flex justify-content-center">HOTEL LUXURY</p>
            <h3 className="d-flex justify-content-center">Receptions</h3>
            <p className="d-flex align-items-center mt-5">
              Phasellus enim libero, blandit vel sapien vitae, condimentum
              ultricies magna et. Quisque euismod orci ut et lobortis. Phasellus
              enim libero, blandit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
