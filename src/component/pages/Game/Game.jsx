import "./Game.css";
import { useEffect, useState } from "react";

function Game() {
  const [level, setLevel] = useState(0);
  const [gameTime, setGameTime] = useState({});
  useEffect(() => {
    alert("hello react");
  }, [level]);
  useEffect(() => {
    console.log("update level");
  }, [level]);
  useEffect(() => {
    setGameTime(`${new Date().getHours()}:${new Date().getMinutes()}`);
  }, []);
  useEffect(() => {
    alert("Game time changed");
  }, [gameTime]);
  function clickToChangeState() {
    setLevel(level + 1);
  }
  function UpdateTime() {
    setGameTime(`${new Date().getHours()}:${new Date().getMinutes()}`);
  }
  function ShowGameTime() {
    let time =""
   Object.keys(gameTime).map(key =>
   time =`${key.toString()} : ${gameTime[key].toString()}`
    )
  }
  let time = ShowGameTime()
   
  return (
    <div>
      <h1>{level}</h1>
      <button onClick={ShowGameTime}>Click to Show</button>
     <div>{time}</div>
      <button onClick={clickToChangeState}>Click</button>
      <button onClick={UpdateTime}>Update Time</button>
    </div>
  );
}

export default Game;
