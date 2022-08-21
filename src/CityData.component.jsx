import { useState } from "react";

export default function CityData(props) {
  let [cityName, setCityName] = useState(props.cityName);
  let [residentsNum, setResidentNum] = useState(props.residentsNum);
  let [streetsNum, setStreetsNum] = useState(props.streetsNum);
  let [isThereBeach, setIsThereBeach] = useState(props.isThereBeach);
  let [citySymbol, setCitySymbol] = useState(props.citySymbol);
  return (
    <div>
      <h3>{cityName}</h3>
      <h3>{residentsNum}</h3>
      <h3>{streetsNum}</h3>
      <h3>{isThereBeach}</h3>
      <img src={citySymbol} style={{"width": "30vw"}}alt="" />
    </div>
  );
}
