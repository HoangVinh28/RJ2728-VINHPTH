import Styles from "./MusicPlayer.module.css";
import { BsPlay } from "react-icons/bs";
interface Ipros {
  img: any;
  title1: string;
  title2: string;
  title3: string;
  icon: any;
}
const BlockUI3: React.FC<Ipros> = (props) => {
  const { icon, title1, title2, title3, img } = props;
  return (
    <div className="d-flex">
      <div className="col-5">
        <div className={Styles.back_white}>
            <div className={Styles.f_bold}>01</div>
            <div>{img}</div>
            <div><BsPlay/></div>
            <div className={Styles.f_bold}>{title1}</div>
            <div className={Styles.color_ccc}>{title2}</div>
            <div className={Styles.color_cccc}>{title3}</div>
            <div className={Styles.m_left_20}>{icon}</div>
        </div>
      </div>
      <div className="col-7">
       
      </div>
    </div>
  );
};
export default BlockUI3;
