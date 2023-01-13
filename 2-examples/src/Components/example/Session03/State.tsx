import { useState } from "react";

const BlockUI = () => {
  const [numberState, setNumberState] = useState<number>(0)
  const PlusPercent =() =>{
    setNumberState(numberState +1)
  }
  const PlusPercent1 =() =>{
    setNumberState(numberState -1)
  }
  return (
    <div className="d-flex w-50 m-auto">
        <button onClick={PlusPercent} disabled={numberState >=10 ? true : false}>Increase</button>
        <h1>{numberState}</h1>
      <button onClick={PlusPercent1} disabled={numberState <=0 ? true : false}>Decrease</button>
    </div>
  );
};
export default BlockUI;
