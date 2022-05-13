import React, { useState } from "react";

function Counter() {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("sorry below zero is not allowed");
    }
  };

  return (
    <>
      <div className="container">
        <div className="centerdiv">
          <h1>{num}</h1>
        </div>
          <div className="btndiv">
            <button className="btn1" onClick={incNum}>
              increment
            </button>
            <button className="btn2" onClick={decNum}>
              Decrement
            </button>
          </div>
      </div>
    </>
  );
}

export default Counter;
