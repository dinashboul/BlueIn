import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './navbar.css'
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { useLogin } from "../../contexts/LoginContext";
import birdBlue from  "../../assests/birdBlue.png"  ;
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSearchData } from '../../contexts/SearchContext'
import { useTheme } from "../../contexts/ThemeContext";
import SignUp from "../SignUp/SignUp";
const Navbar = () => {
  const { user } = useAuth()
  const history = useHistory()
  const { logoutAuth } = useAuth()

  const { theme, toggleTheme } = useTheme()

  const { imageContext, removeImage } = useLogin()
  const { removeEmail, removeAdmin } = useLogin()
  const { dataContext } = useLogin()
  const { removeName } = useLogin()
  console.log("navbar email is ->", dataContext)
  // Search //////////////////
  const { SearchDataFun } = useSearchData()
  const [searchQuery, setSearchQuery] = useState('');
  const { nameContext } = useLogin()

  const [isDisplay,setIsDisplay]=useState(false)
  const isShow =()=>{
    setIsDisplay(!isDisplay)
  }
  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      console.log("search--> ", searchQuery)
      if (searchQuery !== '') {
        // SearchDataFun(`https://store-wbly.onrender.com/items/search/${searchQuery}`)
        history.push('/');
        SearchDataFun(`https://store-wbly.onrender.com/items/search/item?name=${searchQuery}`)
        
        
      }
      else { window.location.reload(true) }
    }
  }
  // Logout///////////////////
  const LogOut = () => {
    logoutAuth()
    removeEmail()
    removeAdmin()
    removeImage()
    removeName()
    history.push('/')

  }

  const[open,setOpen]=useState(false)

  const isOpen=()=>{
    setOpen(true)
  
   }
   const isClose=()=>{
    setOpen(false)
  
   }

  return (
    <div className='navbar'
      style={{ top: "0", backgroundColor: theme === 'dark' ? '#514e4e' : '' }}>
        <div className="list"  aria-label="Primary" style={{  }} >
          <div style={{ marginLeft: '8%', display: "flex", justifyContent: "space-around", gap: "70px" }}>
            <div style={{ display: "flex", justifyContent: "space-around", gap: "2px" }}>
              <span style={{ top: "1" }}>
                <img to="#" onClick={toggleTheme}
                style={{ width: "50px", height: "50px" }}
                alt="" 
                src={birdBlue}
              />
              </span>
              <span style={{ marginTop: "4px", display: "flex", aspangnItems: "center" }}>
                <Link to="/" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#007bff",textDecoration:"none" }}>
                   BlueIn</Link>
              </span>
            </div>
            <span>  <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: "200px", textAlign: "center", fontSize: "1rem" }}
              onKeyDown={handleSearch}
              placeholder="Search..." /></span>

          </div>
          {/* {adminContext ? (
            <Sidebar />
          ) : (<></>)} */}


          {user ? (
            <> 
            <button className="menu" onClick={isShow}> Menu</button>
            <div className={!isDisplay ?"buttonclass" :"boxmenu"}>
              <Link to="/usercart"> <img className="profile-image"
                src={imageContext} alt="" /></Link>
              <Link to="/usercart" style={{ color: "#007bff", fontSize: "1rem" ,textDecoration:"none"}}>{nameContext}</Link>

              <button onClick={LogOut} className="logout-button"
                style={{ width: "100px", height: "50px" ,marginRight:"8%",textAlign:"center"}}
              >Logout</button>
            </div>
            </>
          ) : (<div style={{
            marginRight: "8%", display: "flex", justifyContent: "space-around",
            gap: "30px", alignItems: "center", right: "0", position: "absolute",
          }}>
            <p><Link to="/login" style={{color:"#007bff",textDecoration:"none"}}> Login </Link></p>
            <p onClick={isOpen}   style={{color:"#007bff",cursor:"pointer",fontSize:"1rem",fontWeight:"bold"}}> 
            SignUP </p>
          </div> )}
        </div>

     
          
          <SignUp isOpen={open}
          isClose={isClose}
          open={open} />
    </div>

  );
}


export default Navbar;