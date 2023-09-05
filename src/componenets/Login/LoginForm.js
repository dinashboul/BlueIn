import React from 'react'
import { useState } from 'react';
import './loginStyle.css'
import '../../index.css'
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import { useLogin } from '../../contexts/LoginContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory()

  const { emailContext } = useLogin();
  const{adminPages}=useLogin()

  const { loginAuth } = useAuth();
  const { user } = useAuth()
  const [token, setToken] = useState('')
  const[mess,setMess]=useState("")

  const submittHandler = async (e) => {
    e.preventDefault();
   if (!email) {
    console.log("Email is null or undefined");
  } 
    else  {
      const configuration = {
        method: "Post",
        url: "https://store-wbly.onrender.com/login",
        data: {
          email,
          password
        }

      }
      await axios(configuration)
        .then((result) => {
          console.log("login is good")
          email&& emailContext(email)

          console.log(result.data)
          setToken(result.data.token)
          loginAuth(token)

          console.log("isAdmin ->",result.data.isAdmin)
          result.data.isAdmin && adminPages(result.data.isAdmin)
          setEmail("")
          setPassword("")
          history.push('/')

        })
        .catch((err) =>{console.log(err)
        setMess("Email OR pass is Incorrect")}
        )
    }
    

    
  }

  return (<>

    {!user ? (<section style={{ display: "flex", justifyContent: "center", alignItems: "start",marginTop:"200px" }}>
      <div className='center' >
        <form className='container-login' 
       
        onSubmit={(e) => submittHandler(e)}>
          <p style={{marginBottom:"20px",fontSize:"1rem",color:"blue",fontWeight:"bold"}}>{mess}</p>
          <div className='inputs'>
            <h2 className='brand-title'>Login</h2>
            <div className="form-outline mb-4">
              <label className="inputs" htmlFor="form1Example1">Email </label>
              <input type="email" id="email" className="form-control" 
              onChange={e => setEmail(e.target.value)} value={email} 
              required/>
            </div>

            <div className="form-outline mb-4">
              <label className="inputs" htmlFor="form1Example2">Password</label>
              <input type="password" id="form1Example2" className="form-control" 
              onChange={e => setPassword(e.target.value)} value={password} 
              required/>
            </div>
            <button type="submit" value="LOGIN" className="btn btn-primary btn-block">Sign in</button>
            
          </div>
        </form>
      </div>
    </section>
    ) : (
      <section style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        
      </section>)}
  </>)
}

export default LoginForm