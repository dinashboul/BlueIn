import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useLogin } from '../contexts/LoginContext';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import "./categories.css"
function Categories() {
  const { adminContext } = useLogin()
  const location = useLocation();
  const x = useParams()

  
  console.log(" x is ", x)
  return (
    <SideNav style={{
      backgroundColor: " #ecf0f5",
      boxShadow: "14px 14px 20px #cbced1, -14px -14px 20px white",
      position: "fixed",
      gap: "500px",
      marginright: "470px",
      color: "blue",
      height: "70%",

    }}

      onSelect={(selected) => {

      }}
    >
      <SideNav.Toggle style={{ backgroundColor: "#007bff" }} />
      <SideNav.Nav defaultSelected="home" >
        {adminContext ? (
          <>
            <NavItem eventKey="charts" >
              <NavIcon >
                <i style={{ fontSize: "1rem", fontweight: "bold" }} />
                <h1 style={{ color: "blue", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "20px" }} >Users</h1>
              </NavIcon>
              
              <NavItem >
                <NavText eventKey="charts/linechart">
                  <Link to="/signup"> Add New User </Link>
                </NavText>
              </NavItem>

              <NavItem eventKey="charts/barchart">
                <NavText>
                  <Link to="/deleteuser">Delete User</Link>
                </NavText>
              </NavItem>

            </NavItem>
            <NavItem eventKey="charts" >
              <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '2rem' }} />
                <h1 style={{ color: "blue", fontSize: "1.5rem", fontWeight: "bold" }} >Items</h1>

              </NavIcon>
             
              <NavItem eventKey="charts/linechart">
                <NavText>
                  <Link to="/create"> Add New Item </Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="charts/barchart">
                <NavText>
                  <Link to="/"> Delete Item</Link>
                </NavText>
              </NavItem>
            </NavItem>
          </>) : (
          <NavItem eventKey="home" >
            <NavIcon>
              <i style={{ fontSize: "2rem", fontweight: "bold" }} />
            </NavIcon>
            <NavText >
              <h1
                style={{ color: "blue", fontSize: "1.7rem", fontWeight: "bold", marginBottom: "30px" }}
              >Categories</h1>
            </NavText></NavItem>)}
    
         <NavItem eventKey="home" >
      <NavIcon>
          <i style={{ fontSize: "2rem", fontweight: "bold" }} />
        </NavIcon>
        <NavText >
        <Link to="/category/kids" 
            className={` ${location.pathname === '/category/kids' ? 'active-link' : ''}`}
            style={{color:"blue",fontSize:"1.5rem",fontWeight:"bold"}}
          >
            Kids
          </Link>

        </NavText>
        <NavIcon>
       < Link to="/category/women"
          style={{color:"blue",fontSize:"1.5rem",fontWeight:"bold",marginBottom:"20px"}}
            className={` ${location.pathname === '/category/women' ? 'active-link' : ''}`}
          >Women</Link>       
           </NavIcon>
      </NavItem>


      <NavItem eventKey="home">
      <NavIcon>
          <i style={{ fontSize: "2rem", fontweight: "bold" }} />
        </NavIcon>
        <NavText>
       < Link to="/category/women"
          style={{color:"blue",fontSize:"1.5rem",fontWeight:"bold",marginBottom:"20px"}}
            className={` ${location.pathname === '/category/women' ? 'active-link' : ''}`}
          >Women</Link>       
           </NavText>
      </NavItem>
      <NavItem eventKey="home">
        <NavIcon>
          <i style={{ fontSize: "2rem", fontweight: "bold" }} />
        </NavIcon>
        <NavText>
          <Link to="/category/man"
          style={{color:"blue",fontSize:"1.5rem",left:"30%",fontWeight:"bold",marginBottom:"20px"}}
            className={` ${location.pathname === '/category/man' ? 'active-link' : ''}`}
          >Man</Link>
        </NavText>
      </NavItem>
      <NavItem eventKey="home">
      <NavIcon>
          <i style={{ fontSize: "2rem", fontweight: "bold" }} />
        </NavIcon>
        <NavText>
        <Link to="/category/accessories"
          style={{color:"blue",fontSize:"1.5rem",left:"30%",fontWeight:"bold",marginBottom:"20px"}}
            className={` ${location.pathname === '/category/accessories' ? 'active-link' : ''}`}
          >Accessories</Link>
        </NavText>
      </NavItem>
      <NavItem eventKey="home">
      <NavIcon>
          <i style={{ fontSize: "2rem", fontweight: "bold" }} />
        </NavIcon>
        <NavText>
        
          <Link to="/category/bags" 
            className={` ${location.pathname === '/category/bags' ? 'active-link' : ''}`}
            style={{color:"blue",fontSize:"1.5rem",left:"30%",fontWeight:"bold",marginBottom:"20px"}}

          >
            Bags
          </Link>
        </NavText>
        
      </NavItem>  
      </SideNav.Nav>
    </SideNav>

  )
}

export default Categories