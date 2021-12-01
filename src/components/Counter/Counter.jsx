import React from "react";
import "./Counter.scss";

const Counter = () => {
    return <div className="counter">
      <p className="counter__header">Counter</p>
      <div className="counter__button-container">
        <button className="counter__button">+</button>
        <button className="counter__button">-</button>
      </div>  
    </div>
  
}

export default Counter;