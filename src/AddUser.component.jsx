import { useState } from "react";

export default function AddUser(){
const  [user,setUser]= useState({})
user ={fName,lName,age,email,password,passwordValidation}
const changeUserData=(e)=>{
setUser(e.target.name.e.target.value)
}
return (
    <div>
        <form >
            <input type="text" name="fName" onClick={changeUserData} />
            <input type="text" name="lName" onClick={changeUserData} />
            <input type="text" name="age" onClick={changeUserData} />
            <input type="text" name="email" onClick={changeUserData}/>
            <input type="text" name="password" onClick={changeUserData}/>
            <input type="text" name="passwordValidation" onClick={changeUserData}/>
        </form>
    </div>
)
}