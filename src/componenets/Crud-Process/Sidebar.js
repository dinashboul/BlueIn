// import React from 'react'
// import SideNav, {  NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import { useState } from 'react';
// import SignUp from '../SignUp/SignUp';

// function Sidebar() {
//     const[open,setOpen]=useState(false)

//   const isOpen=()=>{
//     setOpen(true)
//     console.log("opened")
//    }
//    const isClose=()=>{
//     setOpen(false)
  
//    }
//   return (
//     <SideNav style={{backgroundColor:" #ecf0f5",
//     	boxShadow: "14px 14px 20px #cbced1, -14px -14px 20px white",
//         position:"fixed",
//         gap:"500px",
//         marginright:"470px",
//         color:"blue",
//        height:"50%"
// }}
//     onSelect={(selected) => {
//        console.log("dina")
//     }}
// >
//     <SideNav.Toggle />
//     <SideNav.Nav  defaultSelected="home">
        // <NavItem eventKey="home">
        // <NavIcon>
        //         <i style ={{fontSize:"2rem",fontweight:"bold"}} />
        //     </NavIcon>
        //     <NavText>
        //         <h1 style={{color:"blue",fontSize:"1.5rem",left:"30%",fontWeight:"bold",marginBottom:"20px"}} >Users</h1>
        //     </NavText>
        //     <NavItem eventKey="charts/linechart">
        //         <NavText>
        //             <p onClick={isOpen}>Add New User</p>
                    
        //         </NavText>
        //     </NavItem>
        //     <NavItem eventkey="charts/linechart">
        //         <NavText>
        //             <Link to="/deleteuser">Delete User</Link>
        //         </NavText>
        //     </NavItem>
        // </NavItem>

        // <NavItem eventKey="charts" >
        //     <NavIcon>
        //         <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1rem' }} />
        //     </NavIcon>
        //     <NavText >
        //     <h1 style={{color:"blue",fontSize:"1.5rem",left:"30%",fontWeight:"bold"}} >Items</h1>
        //     </NavText>
        //     <NavItem eventKey="charts/linechart">
        //         <NavText>
        //         <Link to="/create"> Add New Item </Link>
        //         </NavText>
        //     </NavItem>
        //     <NavItem eventKey="charts/linechart">
        //         <NavText>
        //             <Link to ="/"> Delete Item</Link>
        //         </NavText>
        //     </NavItem>
        // </NavItem>
//     </SideNav.Nav>
    
// </SideNav>

//   )
// }

// export default Sidebar