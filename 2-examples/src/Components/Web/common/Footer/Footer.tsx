import Styles from "./Footer.module.css";

const Footer: React.FC = () => {
  //const { setIsLogin } = props;
  //const { title } = props
  return (
    <header>
      <div className="p-5 mb-2 bg-dark text-white d-flex m-auto ">
        <div className="col-7 d-flex">
          <p className="w-50">Home</p>
          <p className="w-50">Booking</p>
          <p className="w-50">About Us</p>
          <p className="w-50">Services</p>
          <p className="w-50">Contact</p>
        </div>
        <div className="col-5">
        <img
            src="https://tse1.mm.bing.net/th?id=OIP.q_RAA3Ri2XMtrD-I8scBHAHaFS&pid=Api&P=0"
            alt="Pulpit rock"
            className={`row m-auto ${Styles.h_355} `}
          />
        </div>
      </div>
    </header>
  );
};

export default Footer;
