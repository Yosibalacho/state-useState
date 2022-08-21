import { useState } from "react";

export default function Student() {
  let [firstName, setFirstName] = useState("N/A");
  let [lastName, setLastName] = useState("N/A");
  let [age, setAge] = useState("N/A");
  return (
    <div>
      <h3> {firstName} </h3>
      <h3>{lastName} </h3>
      <h3> {age} </h3>
    </div>
  );
}
