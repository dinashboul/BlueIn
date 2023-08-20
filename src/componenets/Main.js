// import { useState } from 'react';
// import LoginForm from '/home/dinashboul/React_contextApi/myapp/src/componenets/Login/LoginForm.js';

// function Main() {

//   // const adminUser = {
//   //   email: "dina@admin.com",
//   //   password: "dina1234"
//   // }

//   const [newUser, setNewUser] = useState([]);

//   const [user, setUser] = useState({ name: "", email: "" });
//   // const [error, setError] = useState("");


//   const handleRegister = (user) => {
//     setNewUser((prevUsers) => [...prevUsers, user])
//     console.log(newUser)
//   }

//   // const Login = (details) => {
//   //   if (details.email === adminUser.email && details.password === adminUser.password) {
//   //     console.log(details )
//   //     setUser({
//   //       name: details.name,
//   //       email: details.email
//   //     })
//   //   }
//   //   else {
//   //     console.log("dosen't match")
//   //     setError("Details Dont Match");
//   //   }
//   // }

//   const LogOut = () => {
//     setUser({
//       name: "",
//       email: ""
//     })
//   }
//   return (
//     <div className='App'>
//       {(user.email !== "") ?(
//       <div>
//           <h2> Welcome <span>{user.name}</span> </h2>
//           <button onClick={LogOut}> Logout</button>
//         </div>) : (
//           <LoginForm Login={Login} error={error}/>
          
//           //  <SignUp onRegister={handleRegister}/> 
//           //  <UserDetail userData={adminUser}/> 
          
//         )}
//     </div>
//   )
// }

// export default Main