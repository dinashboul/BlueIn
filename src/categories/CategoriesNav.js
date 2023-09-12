import React from 'react'
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { useLogin } from '../contexts/LoginContext';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useState } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import SignUp from '../componenets/SignUp/SignUp';
function Categories() {
  const { adminContext } = useLogin()
  const location = useLocation();
  const[open,setOpen]=useState(false)

  const isOpen=()=>{
    setOpen(true)
  
   }
   const isClose=()=>{
    setOpen(false)
  
   }
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
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" 
              style={{ color: "blue", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "20px",marginTop:"20px" }} >
                Users</i>
            </NavIcon>
            <NavItem eventKey="charts/linechart">
                <NavText onClick={isOpen}
                  style={{ color: "#007bff", fontSize: "1rem", fontWeight: "bold"}}>
                   Add New User 
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
               <Link style={{textDecoration:"none"}} to="/deleteuser" >Delete User</Link>
                </NavText>
            </NavItem>
            
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" 
                style={{ color: "blue", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "20px",marginTop:"20px" }}>
                  Items</i>
            </NavIcon>

            <NavItem eventKey="charts/linechart">
            <NavText>
                  <Link style={{textDecoration:"none"}} to="/create"> Add New Item </Link>
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
            <NavText>
                  <Link style={{textDecoration:"none"}} to="/"> Delete Item</Link>
                </NavText>
            </NavItem>
        </NavItem>            
          </>) : (
          <NavItem eventkey="home" >
            <NavIcon>
              <i style={{ fontSize: "1rem", fontweight: "bold" }}></i>
            </NavIcon>
            <NavText >
              <h1
                style={{ color: "blue", fontSize: "1.7rem", fontWeight: "bold", marginBottom: "30px" }}
              >Categories</h1>
            </NavText></NavItem>)}
    
         <NavItem eventkey="home" >
      <NavIcon>
          <i style={{ fontSize: "2rem", fontweight: "bold" }} />
        </NavIcon>
        <NavText >
        <Link  to="/category/kids" 
            className={` ${location.pathname === '/category/kids' ? 'active-link' : ''}`}
            style={{textDecoration:"none", color:"blue",fontSize:"1.5rem",fontWeight:"bold"}}
          >
            Kids
          </Link>

        </NavText>
        <NavIcon>
       < Link to="/category/women"
          style={{textDecoration:"none", color:"blue",fontSize:"1.5rem",fontWeight:"bold",marginBottom:"20px"}}
            className={` ${location.pathname === '/category/women' ? 'active-link' : ''}`}
          >Women</Link>       
           </NavIcon>
      </NavItem>


      <NavItem eventkey="home">
      <NavIcon>
          <i style={{ fontSize: "2rem", fontweight: "bold" }} />
        </NavIcon>
        <NavText>
       < Link  to="/category/women"
          style={{textDecoration:"none", color:"blue",fontSize:"1.5rem",fontWeight:"bold",marginBottom:"20px"}}
            className={` ${location.pathname === '/category/women' ? 'active-link' : ''}`}
          >Women</Link>       
           </NavText>
      </NavItem>
      <NavItem eventkey="home">
        <NavIcon>
          <i style={{ fontSize: "2rem", fontweight: "bold" }} />
        </NavIcon>
        <NavText>
          <Link to="/category/man"
          style={{textDecoration:"none", color:"blue",fontSize:"1.5rem",left:"30%",fontWeight:"bold",marginBottom:"20px"}}
            className={` ${location.pathname === '/category/man' ? 'active-link' : ''}`}
          >Man</Link>
        </NavText>
      </NavItem>
      <NavItem eventkey="home">
      <NavIcon>
          <i style={{ fontSize: "2rem", fontweight: "bold" }} />
        </NavIcon>
        <NavText>
        <Link to="/category/accessories"
          style={{textDecoration:"none", color:"blue",fontSize:"1.5rem",left:"30%",fontWeight:"bold",marginBottom:"20px"}}
            className={` ${location.pathname === '/category/accessories' ? 'active-link' : ''}`}
          >Accessories</Link>
        </NavText>
      </NavItem>
      <NavItem eventkey="home">
      <NavIcon>
          <i style={{ fontSize: "2rem", fontweight: "bold" }} />
        </NavIcon>
        <NavText>
        
          <Link  to="/category/bags" 
            className={` ${location.pathname === '/category/bags' ? 'active-link' : ''}`}
            style={{textDecoration:"none", color:"blue",fontSize:"1.5rem",left:"30%",fontWeight:"bold",marginBottom:"20px"}}

          >
            Bags
          </Link>
        </NavText>
        
      </NavItem>  
      </SideNav.Nav>
      <SignUp isOpen={open}
          isClose={isClose}
          open={open} />
    </SideNav>

  )
}

export default Categories