import React, { useState } from 'react';
import axios from 'axios';
import  styles from "./signup.css"
import { Modal } from 'react-bootstrap';

function SignUp({isOpen,isClose,open}) {
  
  //     // //////////////////////////////////////////////
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const image_url="https://th.bing.com/th/id/R.888e074ed492c906bbcb7dd8085b91a0?rik=SrKCZaObq08f3Q&pid=ImgRaw&r=0&sres=1&sresct=1"
  const [register,setRegister]=useState(false)
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name,email,password)
    if (password==="" || email==="" || name===""){
      setRegister(false)
    }else{
    const configuration ={
      method:"post",
      url:"https://store-wbly.onrender.com/users",
      data:{
        full_name:name,
        email,
        password,
        image_url
      }
    };
    axios(configuration)
    .then((result)=>{
      console.log("the result is   ",result)
      setRegister(true);
      setName("");
      setEmail("");
      setPassword("")
      
    }).catch((err)=>{
      err=new Error()
      console.log("hte err is  ",err)})
  }
}



  return (   
    <Modal show={open} onHide={isClose} 
   
    >  
    <div className='center' >
   
    <form className='container-login' 
      onSubmit={(e)=>handleSubmit(e)}>
         <span className="close-button" onClick={isClose}>
          x
        </span>
      <div className='inputs'>
      <h2 className='brand-title' style={{top:"0"}}>SignUp</h2>
      <div className="form-outline mb-4">
        <input type="text" id="name" name="name" className="form-control" placeholder='Full Name'
         onChange={(e)=>setName(e.target.value)} value={name}/>
      </div>
      <div className="form-outline mb-4">
        <input type="email" id="email" className="form-control" placeholder='Email'
         onChange={(e)=>setEmail(e.target.value)} value={email}/>
      </div>

      <div className="form-outline mb-4">
        <input type="password" id="form1Example2" className="form-control" placeholder='Password'
        onChange={(e)=>setPassword(e.target.value)} value={password} />
      </div>
      
      <button type="submit" value="SignUp" className="btn btn-primary btn-block">Sign UP</button>
      </div>
      {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (<></>   )}
    </form>
    </div>
    </Modal>
  )
  
}

export default SignUp