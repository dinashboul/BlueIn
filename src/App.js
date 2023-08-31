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
import UpdateItem from './componenets/Crud-Process/UpdateItem';
import Footer from './componenets/footer/Footer';
import CategoriesNav from './categories/CategoriesNav';
import CategoriesPage from './categories/CategoriesPage';
import { useTheme } from './contexts/ThemeContext';
function App() {
  const {theme}=useTheme()
  return(
   
  <div className='App' style={{backgroundColor:theme==='dark'?' #514e4e':''}}>
    <Router>
        <div className={`App ${theme === 'dark' ? 'dark-theme' : ''}`} >
          <Navbar />
          <CategoriesNav/>
          <div className='content'>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route
                path="/category/:category"
                render={({ match }) => <CategoriesPage category={match.params.category} />}
              />
             
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
              <Route path='/updateitem' >
                <UpdateItem />
              </Route>
              <Route>
                <DeleteUser path='/deleteuser'/>
              </Route>
              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          </div>
          {/* <Footer/> */}
        </div>
      </Router>

  </div>
 )
  

}

export default App