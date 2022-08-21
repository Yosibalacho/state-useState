import { useState } from "react";

export default function Lecturer(props) {
  let [fName, setFname] = useState(props.obj.fName);
  let [lName, setLname] = useState(props.obj.lName);
  function changeFirstName() {
    setFname("Yosi");
  }
  function changeLastName() {
    setLname("Balacho");
  }
  function changeNameToUpperCase() {
    setFname(fName.toUpperCase());
    setLname(lName.toUpperCase());
  }
  return (
    <div>
      <h3>{fName}</h3>
      <h3>{lName}</h3>
      <button onClick={changeFirstName}>Change first name</button>
      <button onClick={changeLastName}>Change last name</button>
      <button onClick={changeNameToUpperCase}>Change to upper case</button>
    </div>
  );
}
