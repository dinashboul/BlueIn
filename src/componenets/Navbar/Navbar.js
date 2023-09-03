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
          <div style={{ marginLeft: '20%',display:"flex",justifyContent:"space-around",gap:"70px"}}>
            <li style={{ top: "1" }}><img to="#" onClick={toggleTheme}
                style={{ width: "50px", height: "50px" }}
                alt="" src="https://png.pngtree.com/template/20200316/ourmid/pngtree-bird-blue-logo-template-image_354657.jpg"
              /></li>
             <li style={{marginTop:"0",display:"flex",alignItems:"center"}}> <Link> BlueIn</Link> </li>

          <li>  <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}

            onKeyDown={handleSearch}
            placeholder="Search..." /></li>
          <li style={{display:"flex",alignItems:"center"}}><Link to="/"> Home</Link> </li>
          </div>
          {adminContext ? (
            <Sidebar />
          ) : (<></>)}


          {user ? (
            <div className="buttonclass">           
              <li><Link to="/usercart" style={{ color: "#007bff", fontSize: "1rem" }}>Welcome 🖐{nameContext}</Link></li>
              <li><Link to="/usercart"> <img className="profile-image"
                src={imageContext} alt="" /></Link></li>
              <li style={{ width: "200px" ,marginRight:"8%"}}><button onClick={LogOut} className="logout-button">Logout</button></li>
          </div>
            
          ) : (<div style={{display:"flex",alignItems:"center",justifyContent:"space-around",gap:"70px"}}>
            <li><Link to="/login"> Login </Link></li>
            <li><Link to="/signup"> SignUP </Link></li>
          </div>)}
        </ul>

      </div>


    </div>

  );
}


export default Navbar;