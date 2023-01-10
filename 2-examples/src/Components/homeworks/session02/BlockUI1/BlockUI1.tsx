
import React from "react";

interface IProps {
  text: string;
  color1: string;
  color2: string;
  percent: number;
}
const BlockUI: React.FC<IProps> = (props) => {
  const { text,   percent } = props;
  return (
    <div className="progress">
      <div className="progress-bar bg-danger" style ={{width: 200}}>{text}</div>
      <div className="progress-bar bg-secondary" style={{width: percent}}>{`${percent}%`}</div>
    </div>
  );
};
export default BlockUI;
