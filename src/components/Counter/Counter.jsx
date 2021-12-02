import React, { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  }

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

    return <div className="counter">
      <p className="counter__header">Counter</p>
      <div className="counter__button-container">
        <button onClick={handleIncrement} className="counter__button">+</button>
        <p className="counter__button--text">{counter}</p>
        <button onClick={handleDecrement} className="counter__button">-</button>
      </div> 
    </div>
  
}

export default Counter;