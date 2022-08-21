import { useState } from "react";
import Lecturer from "./Lecturer.component";
import Student from "./Student.component";
export default function Course() {
  let [subject, setSubject] = useState([
    "subject1",
    "subject2",
    "subject3",
    "subject4",
    "subject5",
  ]);
  let [students, setStudents] = useState([]);
  let [lecturer, setLecturer] = useState({ fName: "N/A", lName: "N/A" });
  function changeStudentsArray() {
    setStudents([
      { first_name: "yos", last_name: "sss", age: 12 },
      { first_name: "yon", last_name: "ee", age: 13 },
      { first_name: "bat", last_name: "ww", age: 14 },
      { first_name: "dal", last_name: "qq", age: 15 },
    ]);
  }
  function addNewToSubject(){
setSubject([...subject,"New"])
  }
  return (
    <div>
      <Lecturer obj={lecturer} />
      <h1>
        {subject.map((subject) => (
          <div>{subject}</div>
        ))}
      </h1>
     <div>{students.map(student=><Student/>)} </div> 
      <button onClick={changeStudentsArray}>changeState</button>
      <button onClick={addNewToSubject}>add new to subject</button>
    </div>
  );
}
