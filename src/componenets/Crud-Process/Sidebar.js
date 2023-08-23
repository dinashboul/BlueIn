import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Sidebar() {
  return (
    <SideNav style={{backgroundColor:" #ecf0f5",
    	boxShadow: "14px 14px 20px #cbced1, -14px -14px 20px white",
        position:"fixed",
        gap:"500px",
        marginright:"40px",
        color:"blue",
        zIndex:"1",
       height:"50%"
}}
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav style={{}} defaultSelected="home">
        <NavItem eventKey="home">
        <NavIcon>
                <i style ={{fontSize:"2rem",fontweight:"bold"}} />
            </NavIcon>
            <NavText>
                <h1 style={{color:"blue",fontSize:"1.5rem",left:"30%",fontWeight:"bold"}} >Users</h1>
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
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
            </NavIcon>
            <NavText >
            <h1 style={{color:"blue",fontSize:"1.5rem",left:"30%",fontWeight:"bold"}} >Items</h1>
 
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                <Link to="/create"> Add New Item </Link>
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    <Link to ="/"> Delete Item</Link>
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>

  )
}

export default Sidebar