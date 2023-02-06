import React, { useState } from 'react'

type Props = {}

function ChangColor(props: Props) {
    const [colorState, setColorState] = useState<string>("red");
    const handleChangRed = () => setColorState("red");
    const handleChangBlue = () => setColorState("blue");
  return (
    <>
    <div style={{color : colorState}}>ChangColor</div>
    <button onClick={handleChangRed} disabled = {colorState=== "red" }>Red</button>
    <button onClick={handleChangBlue} disabled = {colorState=== "blue" }>Blue</button>
    </>
  )
}

export default ChangColor