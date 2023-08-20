import React, { useState } from 'react';
import axios from 'axios';
function SignUp() {
 
  // const [data, setdata] = useState({ name: "", email: "", password: "" });
  // const [newUser, setNewUser] = useState([]);

  // const submittHandler = e => {
  //   e.preventDefault();
  //   console.log(data)
  //   handleRegister(data)
    

  //   setdata({ name: "", email: "", password: "" })
  // }
  
  // const handleRegister =async (user) => {
  //   // error message for matching name with password
  //   // if (!v1 || !v2) {
  //   //   setErrMsg("Invalid Entry");
  //   //   return;
  //   // }
  //   try{
  //     const response = await axios.post(
  //     REGISTER_URL,
  //     JSON.stringify({user}),
  //     {
  //       headers:{"Content-Type":"application/json"},
  //       withCredentials:true,
  //     }
  //     );
  //     setdata({ name: "", email: "", password: "" })
  //   }catch(err){
  //     console.log("no register")
  //   }
        
  //     }
  //     // //////////////////////////////////////////////

  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [image_url,setImage]=useState("https://th.bing.com/th/id/R.888e074ed492c906bbcb7dd8085b91a0?rik=SrKCZaObq08f3Q&pid=ImgRaw&r=0&sres=1&sresct=1")
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
        name,
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
  <section style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

    <form className='container-login' onSubmit={(e)=>handleSubmit(e)}>
      <div className='inputs'>
      <h2 className='brand-title'>SignUp</h2>
      <div className="form-outline mb-4">
        <label className="inputs" htmlFor="form1Example1">Name</label>
        <input type="text" id="name" name="name" className="form-control" onChange={(e)=>setName(e.target.value)} value={name}/>
      </div>
      <div className="form-outline mb-4">
      <label className="inputs" htmlFor="form1Example1">Email </label>
        <input type="email" id="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email}/>
      </div>

      <div className="form-outline mb-4">
      <label className="inputs" htmlFor="form1Example2">Password</label>
        <input type="password" id="form1Example2" className="form-control" onChange={(e)=>setPassword(e.target.value)} value={password} />
      </div>
      
      <button type="submit" value="SignUp" className="btn btn-primary btn-block">Sign UP</button>
      </div>
      {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
    </form>
    </section>
  )
  
}

export default SignUp