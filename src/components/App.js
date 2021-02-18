import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [gender,setgender]=useState("male");
  const [number,setnumber]=useState(null);
  const [password,setpassword]=useState("");
  const [isname,setisname]=useState("");
  const [isemail,setisemail]=useState("");
  const [isnumber,setisnumber]=useState("");
  const [ispassword,setispassword]=useState("");
  const [username,setMsg]=useState("");


let handlename=(event)=>{
 setname(event.target.value);
}
let handleemail=(event)=>{
  setemail(event.target.value);
  }
let handlegender=(event)=>{
    setgender(event.target.value);
  }
let handlenumber=(event)=>{
  setnumber(event.target.value);
  }
let handlepassword=(event)=>{
  setpassword(event.target.value);
  }
let handlesubmit=(event)=>{
event.preventDefault();
}                  



let handleClick=()=>{
  if (name=="")
  setisname("Name Error");
  else if (!isNaN(name))
  setisname("Name is not alphanumeric");
  else if (email=="")
  {
    setisname("");
  setisemail("Email Error")
  }
  else if (email.indexOf("@")==-1 || email.indexOf("@")==0)
  {
    setisname("");
  setisemail("Email must contain @");
  }
  else if (email.charAt(email.length-4)!=='.' && email.charAt(email.length-3)!=='.')
  {
    setisname("");
  setisemail("Email is not correct");
  }
  else if (isNaN(number))
  {
    setisemail("");
    setisname("");
  setisnumber("Phone Number must contain only numbers")
  }
  else if (number.length!=10)
  {
     setisemail("");
     setisname("");
  setisnumber("Phone no must contain 10 digit");
  }
  else if (password.length<6)
  {
    setisemail("");
    setisnumber("");
    setisname("");
  setispassword("Password must contain atleast 6 letters")
  }
  else
  {
    setispassword("");
    setisname("");
    setisemail("");
    setisnumber("");
    setMsg(email.substring(0,email.indexOf("@")));
    console.log(username); 
  }


}









  return (
    <div id="main">
      <form onSubmit={handlesubmit}>
     <input data-testid = 'name' name="name" type="text" onChange={handlename} autoComplete="none"/><br/>
     <div>{isname}</div>
     <input data-testid = 'email' name="email" type="text" onChange={handleemail} autoComplete="none"/><br/>
     <div>{isemail}</div>
     <select data-testid = 'gender' name="gender"onChange={handlegender}>
       <option>male</option>
       <option>female</option>
       <option>other</option>
     </select><br/>
     <input type="text" data-testid = 'phoneNumber' name="number" onChange={handlenumber} autoComplete="none"/><br/>
     <div>{isnumber}</div>
     <input type="password" data-testid = 'password' name="password" onChange={handlepassword} autoComplete="none"/><br/>
     <div>{ispassword}</div>
     <button data-testid = 'submit' onClick={handleClick}>Submit</button>
     </form>
     {`Hello ${username}`}
 </div>
  )
}


export default App;
