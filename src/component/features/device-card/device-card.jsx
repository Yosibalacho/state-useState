import React from "react";

function DeviceCard({ devices }) {
  const { brand, color, price, picture } = devices;
  return (
    <div  className="user-card">
      <h1> Brand:{brand}</h1>
      <h1>color:{color}</h1>
      <h1>price:{price}</h1>
      <img src={picture} alt="" />
    </div>
  );
}

export default DeviceCard;
