import React from "react";

//import logo from './logo.svg';
/* import "./App.css";
import anh from "./image/my.jpg";
function App() {
  return (
    <div className="container">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={anh} className="img-fluid rounded-start" alt="..."></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-danger">Hoàng Vinh</h5>
              <p className="card-text">
                Sinh viên Chuyên ngành Công nghệ phần mềm Khoa Công nghệ thông
                tin Đại Học Duy Tân
              </p>
              <p className="card-text">
                <small className="text-muted">Update : 04/01/2023</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
 */
import "./App.css";
import BlockUI2 from "./Components/homeworks/session02/BlockUI2/BlockUI2";
//import BlockUI1 from "./Components/homeworks/session02/BlockUI1/BlockUI1";
//import BlockUI2 from "./Components/homeworks/session02/BlockUI2/BlockUI2";
import BlockUI3 from "./Components/homeworks/session02/BlockUI3/BlockUI3";
import {
  AiOutlineAndroid,
  AiOutlineApple,
  AiOutlineGooglePlus,
} from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { TfiTwitter, TfiPinterestAlt } from "react-icons/tfi";
import BlockUI5 from "./Components/homeworks/session02/BlockUI5/BlockUI5";
import BlockUI6 from "./Components/homeworks/session02/BlockUI6/BlockUI6";
import BlockUI7 from "./Components/homeworks/session02/BlockUI7/BlockUI7";
import MusicPlayer from "./Components/homeworks/session03/MusicPlayer/MusicPlayer";

//import BlockUI from "./Components/example/Session03/State";
//import BlockUIClass from "./Components/example/Session03/StateClass";
//import LikeButton from "./Components/homeworks/session03/LikeButton";
//import RateBtn from "./Components/homeworks/session03/RateBtn";
//import JSX from "./Components/example/1-JSX"
//import BlockUI1 from "./Components/homeworks/session02/BlockUI1/BlockUI1";
function GreenLargeIcon() {
  return (
    <div className="bg bg_green">
      <div>
        {" "}
        <AiOutlineAndroid />
      </div>
    </div>
  );
}
function RedLargeIcon() {
  return (
    <div className=" bg bg_red">
      <div>
        {" "}
        <AiOutlineApple />
      </div>
    </div>
  );
}
function BlueLargeIcon() {
  return (
    <div className=" bg bg_blue">
      <div>
        {" "}
        <AiOutlineApple />
      </div>
    </div>
  );
}
function YellowLargeIcon() {
  return (
    <div className=" bg bg_yellow">
      <div>
        {" "}
        <AiOutlineApple />
      </div>
    </div>
  );
}
function VioletLargeIcon() {
  return (
    <div className=" bg bg_violet">
      <div>
        {" "}
        <AiOutlineApple />
      </div>
    </div>
  );
}
function App() {
  return (
    <>
      {/* <JSX /> */}
      {/* <BlockUI1 title={"Banwidth"} bgTitle="red" percent={20} bgProcess="orange" />
      <BlockUI1 title={"Storage"} bgTitle="cyan" percent={50} bgProcess="orange" />
      <BlockUI1 title={"Users"} bgTitle="green" percent={70} bgProcess="orange" />
      <BlockUI1 title={"Visitors"} bgTitle="yellow"  percent={30} bgProcess="orange" />
      <BlockUI1 title={"Emails"} bgTitle="purple" percent={45} bgProcess="orange" />
      <BlockUI1 title={"Basic"} bgTitle="magenta" percent={80} bgProcess="orange" />
      <BlockUI1 title={"Others"} bgTitle="blue" percent={37} bgProcess="orange" /> */}
      {/*  <BlockUI  /> */}
      {/*  <BlockUIClass  /> */}
      {/*  < LikeButton/> */}
      {/* <RateBtn/> */}
      {/* <BlockUI2 img={<GreenLargeIcon />} bgimg="" title="HTML" percent={70} bgProcess="green"/>
      <BlockUI2 img={<RedLargeIcon/>} bgimg="" title="CSS" percent={60} bgProcess="red" />
      <BlockUI2 img={<BlueLargeIcon/>} bgimg="" title="PHP" percent={30} bgProcess="blue" />
      <BlockUI2 img={<YellowLargeIcon/>} bgimg="" title="Java" percent={80} bgProcess="yellow" />
      <BlockUI2 img={<VioletLargeIcon/>} bgimg="" title=".Net" percent={45} bgProcess="violet"/> */}
      {/* <div className="d-flex w-700">
        <BlockUI3 icon={<FiFacebook />} title1="Facebook" title2="5,000,000 Likes" bgProcess="#3399ff" />
        <BlockUI3 icon={<TfiTwitter />} title1="Twitter" title2="40,000 Tweets" bgProcess="#00ccff"/>
        <BlockUI3 icon={<AiOutlineGooglePlus />} title1="Google +" title2="4,60,000 Plus" bgProcess="#ff751a"/>
        <BlockUI3 icon={<TfiPinterestAlt />} title1="Pinterest" title2="34,000 Pins" bgProcess="#ff471a" />
      </div> */}
      {/* <div className="d-flex">
        <BlockUI5
          img={<img src={require("./assets/images/anh2.jpg")} alt="" style={{ maxWidth: "210px", maxHeight: "100px" }} /> }
          title1="ROBORT PATISON"
          title2="Developing"
          bgEmail="#ff1a1a"
          bgPhone="#00e64d"
          title3="robott12@gamil.com"
          title4="8665543219"
        />
        <BlockUI5
          img={
            <img
              src={require("./assets/images/anh2.jpg")}
              alt=""
              style={{ maxWidth: "210px", maxHeight: "100px" }}
            />
          }
          title1="JAMES SMITH"
          title2="Designer"
          bgEmail="#4da6ff"
          bgPhone="#0080ff"
          title3="smith12@gamil.com"
          title4="8225543219"
        />
        <BlockUI5
          img={
            <img
              src={require("./assets/images/anh2.jpg")}
              alt=""
              style={{ maxWidth: "210px", maxHeight: "100px" }}
            />
          }
          title1="TOM HANKS"
          title2=" Ui Designer"
          bgEmail="#ff751a"
          bgPhone="#ffcc00"
          title3="peter1@gamil.com"
          title4="8225543929"
        />
        <BlockUI5
          img={
            <img
              src={require("./assets/images/anh2.jpg")}
              alt=""
              style={{ maxWidth: "210px", maxHeight: "100px" }}
            />
          }
          title1="SILVESTER STALIN"
          title2=" Testing"
          bgEmail="#aa80ff"
          bgPhone="#ff80d5"
          title3="point12@gamil.com"
          title4="9937924265"
        />
      </div> */}
      {/* <div className="d-flex">
        <BlockUI6 img={<img src={require("./assets/images/anh2.jpg")} alt="" style={{ maxWidth: "349px", maxHeight: "200px" }} /> } title1="EODEM MODO TYPI" bgButton="#009933"/>
        <BlockUI6 img={<img src={require("./assets/images/anh2.jpg")} alt="" style={{ maxWidth: "349px", maxHeight: "200px" }} /> } title1="SEQUITUR MUTATONEM" bgButton="#009933"/>
        <BlockUI6 img={<img src={require("./assets/images/anh2.jpg")} alt="" style={{ maxWidth: "349px", maxHeight: "200px" }} /> } title1="CONSUETUDIUM LECTORUM" bgButton="#009933"/>
        <BlockUI6 img={<img src={require("./assets/images/anh2.jpg")} alt="" style={{ maxWidth: "349px", maxHeight: "200px" }} /> } title1="PARUM CLARAM" bgButton="#009933"/>
      </div> */}
      {/* <div className="d-flex">
      <BlockUI7 discount="-39%" img={<img src={require("./assets/images/anh2.jpg")} alt="" style={{ maxWidth: "300px", maxHeight: "200px" ,marginLeft: "20px" , marginBottom : "20px"}} /> }  price1="$1.422.7" price2="$1,025.5" price3="18% off" title="LG White Front Load Steam Washer" bgProcess="#ffd11a" percent={90} evaluate="10"/>
      <BlockUI7 discount="-13%" img={<img src={require("./assets/images/anh2.jpg")} alt="" style={{ maxWidth: "300px", maxHeight: "200px" ,marginLeft: "20px" , marginBottom : "20px" }} /> }  price1="$96" price2="$85" price3="18% off" title="Edifier Powered Bookshelf Speakers" bgProcess="#ffd11a" percent={85} evaluate="15"/>
      <BlockUI7 discount="-37%" img={<img src={require("./assets/images/anh2.jpg")} alt="" style={{ maxWidth: "300px", maxHeight: "200px" ,marginLeft: "20px" , marginBottom : "20px" }} /> }  price1="$62.99" price2="$45.9" price3="18% off" title="LG White Front Load Steam Washer" bgProcess="#ffd11a" percent={85} evaluate="20"/>
      </div> */}
      <h4>Most Popular</h4>
        <div>92 Songs</div>
      <MusicPlayer  img={<img src={require("./assets/images/anh2.jpg")} alt="" style={{ maxWidth: "55px", maxHeight: "35px" , marginTop: "5px" }} /> } title1="My Stress" title2="NF Real music" title3="3:22" icon={<FcLike/>}/>
      <MusicPlayer  img={<img src={require("./assets/images/anh2.jpg")} alt="" style={{ maxWidth: "55px", maxHeight: "35px" , marginTop: "5px" }} /> } title1="Mirage" title2="Else Twin" title3="4:23" icon={<FcLikePlaceholder/>}/>
      <MusicPlayer  img={<img src={require("./assets/images/anh2.jpg")} alt="" style={{ maxWidth: "55px", maxHeight: "35px" , marginTop: "5px" }} /> } title1="My Stress" title2="NF Real music" title3="3:58" icon={<FcLike/>}/>
      <MusicPlayer  img={<img src={require("./assets/images/anh2.jpg")} alt="" style={{ maxWidth: "55px", maxHeight: "35px" , marginTop: "5px"}} /> } title1="The Hils" title2="The Weekend" title3="5:33" icon={<FcLikePlaceholder/>}/>
      <MusicPlayer  img={<img src={require("./assets/images/anh2.jpg")} alt="" style={{maxWidth: "55px", maxHeight: "35px" , marginTop: "5px"}} /> } title1="Paralyzed" title2="NF Real music" title3="5:08" icon={<FcLike/>}/>
      <MusicPlayer  img={<img src={require("./assets/images/anh2.jpg")} alt="" style={{ maxWidth: "55px", maxHeight: "35px" , marginTop: "5px" }} /> } title1="Timeless" title2="Lucidious" title3="3:50" icon={<FcLikePlaceholder/>}/>
    </>
  );
}
export default App;
