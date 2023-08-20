import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignUp from "/home/dinashboul/React_contextApi/myapp/src/componenets/SignUp/SignUp.js"
import LoginForm from './componenets/Login/LoginForm';
import UserCart from '/home/dinashboul/React_contextApi/myapp/src/componenets/Users/UserCart.js'
import NotFound from './componenets/NotFound';
import Navbar from './componenets/Navbar/Navbar';
import Create from '/home/dinashboul/React_contextApi/myapp/src/componenets/Crud-Process/Create.js'
import Home from './componenets/Home/Home';
import Test from './componenets/Test';
import DeleteUser from './componenets/Crud-Process/DeleteUser';
function App() {
  return(
   
  <div className="App">
    <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/signup'>
                <SignUp />
              </Route>
              <Route path="/create">
                <Create/>
              </Route>
              <Route path='/login'>
                <LoginForm />
              </Route>
              <Route path='/test'>
                <Test />
              </Route>
              <Route path='/usercart' >
                <UserCart />
              </Route>
              <Route>
                <DeleteUser path='/deleteuser'/>
              </Route>
              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>

  </div>
 )
  

}

export default App