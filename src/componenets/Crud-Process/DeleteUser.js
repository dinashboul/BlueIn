import React from 'react'
import '/home/dinashboul/React_contextApi/myapp/src/componenets/Crud-Process/delete.css'
import UseFetch from '../UseFetch';
import '/home/dinashboul/React_contextApi/myapp/src/componenets/Crud-Process/delete.css';
import axios from 'axios';

function DeleteUser() {
    const  { dataUser } = UseFetch('https://store-wbly.onrender.com/users');
    // Delete User/////////////////////////

    const handleDelteUser=(e,user_id)=>{
      e.preventDefault();
      const configration={
        method:"DELETE",
        url:""
      }
      axios(configration)
      .then(()=>{
        alert("User is Deleted")

      })
      .catch((err)=> console.log("correct delete"))

    }
    return (
        <>
   <div className="container1">
      <div className="row">
            {dataUser && dataUser.map((item) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.user_id}>
                        <div className="our-team">
                            <div className="picture">
                                <img className="img-fluid" src={item.image_url} alt=""/>
                            </div>
                            <div className="team-content">
                                <h3 className="name">{item.full_name}</h3>
                                <h4 className="title">email is ={item.email}</h4>
                                <button 
                                onClick={(e) => handleDelteUser(e, item)}
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
