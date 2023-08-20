import { Link } from "react-router-dom/cjs/react-router-dom.min";
import '/home/dinashboul/React_contextApi/myapp/src/componenets/Navbar/navbar.css'
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { useLogin } from "../../contexts/LoginContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Sidebar from "../Crud-Process/Sidebar";
const Navbar = () => {
const {user}=useAuth()  
const history=useHistory()
const {logoutAuth}=useAuth()
const[token,setToken]=useState('')

const {removeEmail,removeAdmin}=useLogin()
const {adminContext}=useLogin()

const LogOut = () => {
    logoutAuth()
    removeEmail()
    removeAdmin()
    history.push('/login')
    
  }
    return (
        <div className="navbar">
            <div className="wrapper">
            
                {/* <img className="logo" alt="" src="https://png.pngtree.com/template/20200316/ourmid/pngtree-bird-blue-logo-template-image_354657.jpg" /> */}
                <h1 className="logo-name">BlueIn</h1>

           
                <nav className="links">
                <ul className="list "aria-label="Primary" role="list">
                <li><Link to="/"> Home</Link> </li>  
                {adminContext?(
                <li><Sidebar/></li>
                ):(<></>)}

                {user?(<>    
                <li><Link to="/usercart"> Profile</Link></li>            
                <li><button onClick={LogOut} style={{width:"5em",color:"blue",right:""}}>Logout</button></li></>
                ):
                (<>
                <li><Link to="/login"> Login </Link></li>
                <li><Link to="/signup"> SignUP </Link></li>
                </>)
                }
                </ul>
                </nav>
            </div>
        </div>

    
    );
}


export default Navbar;