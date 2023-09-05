import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './navbar.css'
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { useLogin } from "../../contexts/LoginContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Sidebar from "../Crud-Process/Sidebar";
import { useSearchData } from '../../contexts/SearchContext'
import { useTheme } from "../../contexts/ThemeContext";
const Navbar = () => {
  const { user } = useAuth()
  const history = useHistory()
  const { logoutAuth } = useAuth()

  const { theme, toggleTheme } = useTheme()

  const { imageContext, removeImage } = useLogin()
  const { removeEmail, removeAdmin } = useLogin()
  const { adminContext } = useLogin()
  const { dataContext } = useLogin()
  const { removeName } = useLogin()
  console.log("navbar email is ->", dataContext)
  // Search //////////////////
  const { SearchDataFun } = useSearchData()
  const [searchQuery, setSearchQuery] = useState('');
  const { nameContext } = useLogin()
  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      console.log("search--> ", searchQuery)
      if (searchQuery !== '') {
        // SearchDataFun(`https://store-wbly.onrender.com/items/search/${searchQuery}`)
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

  return (
    <div className='navbar'
      style={{ top: "0", backgroundColor: theme === 'dark' ? '#514e4e' : '' }}>
      <div className="links">
        <ul className="list " aria-label="Primary" style={{ marginTop: "10px" }} >
          <div style={{ marginLeft: '20%', display: "flex", justifyContent: "space-around", gap: "70px" }}>
            <div style={{ display: "flex", justifyContent: "space-around", gap: "2px" }}>
              <li style={{ top: "1" }}><img to="#" onClick={toggleTheme}
                style={{ width: "50px", height: "50px" }}
                alt="" src="https://png.pngtree.com/template/20200316/ourmid/pngtree-bird-blue-logo-template-image_354657.jpg"
              />
              </li>
              <li style={{ marginTop: "0", display: "flex", alignItems: "center" }}>
                <Link to="/" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#007bff" }}> BlueIn</Link>
              </li>
            </div>
            <li>  <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: "200px", textAlign: "center", fontSize: "1rem" }}
              onKeyDown={handleSearch}
              placeholder="Search..." /></li>

          </div>
          {adminContext ? (
            <Sidebar />
          ) : (<></>)}


          {user ? (
            <div className="buttonclass" style={{ disple: "flex", alignItems: "space-around", gap: "30px" }}>


              <Link to="/usercart"> <img className="profile-image"
                src={imageContext} alt="" /></Link>
              <Link to="/usercart" style={{ color: "#007bff", fontSize: "1rem" }}>{nameContext}</Link>

              <button onClick={LogOut} className="logout-button"
                style={{ width: "100px", height: "50px" ,marginRight:"8%",textAlign:"center"}}
              >Logout</button>
            </div>

          ) : (<div style={{
            marginRight: "8%", display: "flex", justifyContent: "space-around",
            gap: "30px", alignItems: "center", right: "0", position: "absolute", top: "40px"
          }}>
            <li><Link to="/login"> Login </Link></li>
            <li><Link to="/signup"> SignUP </Link></li>
          </div>)}
        </ul>

      </div>


    </div>

  );
}


export default Navbar;