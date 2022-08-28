import "./HomePage.css";
import React, { useContext } from "react";
import {devicesContext} from "../../../contexts/devices-context"

function HomePage() {
  const devices=useContext(devicesContext)
    {console.log(devices)}
    return (
    <div >
      <h1>HomePage</h1>
    </div>
  );
};

export default HomePage;
