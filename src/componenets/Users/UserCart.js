import React, { useState, useEffect } from 'react'
import "/home/dinashboul/React_contextApi/myapp/src/componenets/Users/usr.css"
import "/home/dinashboul/React_contextApi/myapp/src/componenets/Home/homestyle.css"
import axios from 'axios';
import Model from './Model';
import { useAuth } from '../../contexts/AuthContext';
import { useLogin } from '../../contexts/LoginContext';
import { Row ,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import UseFetch from '/home/dinashboul/React_contextApi/myapp/src/componenets/UseFetch.js';

const UserCart = () => {

  const {dataContext}=useLogin()
  console.log("the data context is",dataContext)

  // console.log("the email of user is ",email)
  const [isUpdate, setIsUpdate] = useState(false)
// const apiId=`https://store-wbly.onrender.com/user/${user_id}`
const {user}=useAuth()
const {dataUser}=UseFetch(`https://store-wbly.onrender.com/userbyemail/${dataContext.email}`)

  console.log("the dataUser is ->>", dataUser)

  //  update pic ////////////////////////////////////////////////////////////////////////////////////
  const imgCard =dataUser.image_url;
  const [image_url, setImageUrl] = useState(imgCard);

  const update = async (e) => {
    e.preventDefault()

    const configuration = {
      method: "Put",
      url: "https://store-wbly.onrender.com/user/" + dataUser.user_id,
      data: {
        image_url
      }

    }
    await axios(configuration)
      .then((result) => {
        console.log("the Update of image success", result.data)
        setIsUpdate(true)
      })
      .catch((err) => {
        err = new Error()
        console.log("no data")
      })
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("opened")
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log("model is closed",isModalOpen)

  };


  return (<>
  {user?(<>
    <div className="image-area" style={{marginBottom:"30%"}}>
      <div className="img-wrapper" key={dataUser.user_id}>
        <img
          src={dataUser.image_url} alt='' />
        <h2>{dataUser.full_name}</h2>
        <ul><li>
          <a
            href='#'
            onClick={openModal}
            style={{color:'white',fontSize:"1rem"}}
          >Edit</a>
          </li></ul>
          
        { isModalOpen && <Model 
          isOpen={openModal} 
          closeModal={closeModal}
          isModalOpen={isModalOpen}
            image_url1={image_url}
            setImageUrl1={setImageUrl}
            update={update}
            isUpdate={isUpdate}
          />}
      </div>
    </div>
{/* // ////////////////////// Favorite item /////////////////////////// */}
 
  <div className="main1"  >
  
  {dataUser.favorite && dataUser.favorite.map((item)=>
 <article key={item.item_id} style={{width:"30%",height:"500px",top:"500px",left:"20%",display:"inline-block",justifyContent:"space-around",marginRight:"3em",bottom:"40px"}}>
 <div className="article-wrapper">
   <figure>
     <img src={item.image_url}  alt="" style={{}} />
   </figure>
   <div className="article-body">
     <h2>{item.name}</h2>
     <h2>
     {item.categories}
     </h2>
     <h2>
     {item.description}
     </h2>
     <Link to="/login" className="read-more" >
       Price is {item.price}
     </Link>
   </div>
 </div>
</article>
)}

</div>
  
</>

    ):( <p>Please log in to access the profile page.</p>)}
  </>
  )

}

export default UserCart

