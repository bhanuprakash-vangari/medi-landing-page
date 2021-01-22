import React from "react";
import "../components/Main.css";
import Hero from '../assets/hero.png'
const Main = () => {
  return (
    <div className="main">
      <div className="left">
        <h1>
          Stay Productive & <br />
          Work Remotely
        </h1>
        <p>
          The key to work-from-home success is to create an enviroment that
          allows you to focus on the tasks at hand. Whether you are working from
          home for the first time.
        </p>
        <button>Learn More</button>
      </div>
      <div className="right">
          <img src={Hero} alt=""/>
      </div>
    </div>
  );
};

export default Main;
