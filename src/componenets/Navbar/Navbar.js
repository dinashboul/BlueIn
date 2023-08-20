import { Link } from "react-router-dom/cjs/react-router-dom.min";
import '/home/dinashboul/React_contextApi/myapp/src/componenets/Navbar/navbar.css'
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { useLogin } from "../../contexts/LoginContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Sidebar from "../Crud-Process/Sidebar";
const Navbar = () => {
  const { user } = useAuth()
  const history = useHistory()
  const { logoutAuth } = useAuth()

  const { removeEmail, removeAdmin } = useLogin()
  const { adminContext } = useLogin()

  const LogOut = () => {
    logoutAuth()
    removeEmail()
    removeAdmin()
    history.push('/login')

  }
  return (
    <div className="navbar">
      <div className="logo-section">
        {/* <img className="logo" alt="" src="https://png.pngtree.com/template/20200316/ourmid/pngtree-bird-blue-logo-template-image_354657.jpg" /> */}
        <Link to="/">BlueIn</Link>
      </div>
        <div className="links">
          <ul className="list " aria-label="Primary" role="list">
            <li><Link to="/"> Home</Link> </li>
            {adminContext ? (
            <Sidebar/>
            ) : (<></>)}

            {user ? (<>
              <li><Link to="/usercart"> Profile</Link></li>
              </> 
            ) :
              (<>
                <li><Link to="/login"> Login </Link></li>
                <li><Link to="/signup"> SignUP </Link></li>
              </>)
            }
          </ul>
        </div>
        {user ? (
        <div className="buttonclass">
        <img className="profile-image" src="https://content.woolovers.com/img/o/a8c06-48838_f101l_cyanblue_w_5.jpg" alt=""/>
        <button onClick={LogOut} style={{marginTop:"12px", width: "5em", color: "blue", right: "" ,height:"2em",fontSize:"1em"}}>Logout</button>
        </div>
  
      ):(<></>)}
</div>

  );
}


export default Navbar;