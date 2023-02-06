import React from "react";
import Styles from "./Accordicons.module.css";
import { useState } from "react";

function Accordicons() {
  const [selected, setSelected] = useState(0);
  const toggle = (index: number) => {
    if (selected === index) {
      return setSelected(0);
    }
    setSelected(index);
  };
  const listAccordicons = [
    {
      name: "SIMPLE",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "TOGGLE INFORMATION",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "NICE TOUCH",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.accordion}>
          {listAccordicons.map((item, index) => (
            <div className={Styles.item} key={index}>
              <div className={Styles.title} onClick={() => toggle(index)}>
                <h2>{item.name}</h2>
              </div>
              <div
                className={
                  selected === index
                    ? `${Styles.content_show}`
                    : `${Styles.content}`
                }
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Accordicons;
