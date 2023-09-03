import React from 'react'
import './delete.css'
import axios from 'axios';
import Fetching from '../Fetching';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function DeleteUser() {
    const  { data } = Fetching('https://store-wbly.onrender.com/users');
    // Delete User/////////////////////////
    const history=useHistory()
    const handleDelteUser=(e,user_id)=>{
      e.preventDefault();
      const configration={
        method:"DELETE",
        url:`https://store-wbly.onrender.com/user/${user_id}`
      }
      axios(configration)
      .then(()=>{
        console.log("the user id is",user_id)
        alert("User is Deleted")
        history.push('/deleteuser')
      })
      .catch((err)=> console.log("correct delete"))

    }
    return (
        <>
   <div className="container1">
      <div className="row" style={{marginTop: "30px",marginLeft: "10%"}}>
            {data && data.map((item) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.user_id}>
                        <div className="our-team">
                            <div className="picture">
                                <img className="img-fluid" src={item.image_url} alt=""/>
                            </div>
                            <div className="team-content">
                                <h3 className="title">Name : {item.full_name}</h3>
                                <h4 className="title">Email is : {item.email}</h4>
                                <button 
                                onClick={(e) => handleDelteUser(e, item.user_id)}
                                >Delet User</button>
                            </div>
                            {/* <ul className="social">
                                {item.favorite && Array.isArray(item.favorite) && (
                                    item.favorite.map((favoriteItem, index) => (
                                        <li key={index}>
                                            <a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a>
                                        </li>
                                    ))
                                )}
                            </ul> */}
                        </div>
                    </div>
                ))}
        </div>
    </div> 
        </>
    );
}

export default DeleteUser;
