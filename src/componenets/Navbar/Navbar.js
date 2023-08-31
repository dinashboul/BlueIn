import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './navbar.css'
import { useAuth } from "../../AuthContext";
import { useState } from "react";
import { useLogin } from "../../contexts/LoginContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Sidebar from "../Crud-Process/Sidebar";
import{ useSearchData} from '../../contexts/SearchContext'
import { useTheme } from "../../contexts/ThemeContext";
const Navbar = () => {
  const { user } = useAuth()
  const history = useHistory()
  const { logoutAuth } = useAuth()

  const {theme,toggleTheme}=useTheme()

  const {imageContext,removeImage}=useLogin()
  const { removeEmail, removeAdmin } = useLogin()
  const { adminContext } = useLogin()
  const{dataContext}=useLogin()
  const {removeName}=useLogin()
  console.log("navbar email is ->",dataContext)
  // Search //////////////////
  const {SearchDataFun}=useSearchData()
  const [searchQuery, setSearchQuery] = useState('');
  const {nameContext}=useLogin()
  const handleSearch=(e)=>{
    if (e.keyCode === 13){
    console.log("search--> ",searchQuery)
    if (searchQuery !== '') {
      // SearchDataFun(`https://store-wbly.onrender.com/items/search/${searchQuery}`)
      SearchDataFun(`https://store-wbly.onrender.com/items/search/item?name=${searchQuery}`)
     
    } 
    else{window.location.reload(true)}
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
     style={{top:"0",backgroundColor:theme === 'dark' ? '#514e4e' : ''}}>
     <div className="links">
          <ul className="list " aria-label="Primary" >
        
        <li style={{marginRight:"3em", marginLeft: '8%'}}>
          <div style={{display:"flex",gap:"10px"}}>
        <img to="#" onClick={toggleTheme}
        style={{ width:"50px",height:"50px",}}
        alt="" src="https://png.pngtree.com/template/20200316/ourmid/pngtree-bird-blue-logo-template-image_354657.jpg"
        />
        <Link> BlueIn</Link></div></li>
     
             <li>  <input type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} 
             
                onKeyDown={handleSearch}
                placeholder="Search..."/></li>
            <li><Link to="/"> Home</Link> </li>
            {adminContext ? (
            <Sidebar/>
            ) : (<></>)}


        {user ? ( 
              <li><div className="buttonclass">
              <Link to="/usercart"> Profile</Link>
              <Link to="/usercart" style ={{color:"#007bff",fontSize:"1.5rem"}}>Welcome 🖐{nameContext}</Link>
              <img className="profile-image" 
               src={imageContext} alt=""/>
                <button onClick={LogOut} className="logout-button"
                style={{width:"200px"}}>Logout</button>
              </div>
              </li>
        ):(<>
          <li><Link to="/login"> Login </Link></li>
          <li><Link to="/signup"> SignUP </Link></li>
        </>)}
          </ul>
          
        </div>
       

</div>

  );
}


export default Navbar;