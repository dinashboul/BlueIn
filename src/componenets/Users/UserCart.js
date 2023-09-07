import React, { useState, useEffect } from 'react'
import "./usr.css"
import "../Home/homestyle.css"
import axios from 'axios';
import Model from './Model';
import { useAuth } from '../../contexts/AuthContext';
import { useLogin } from '../../contexts/LoginContext';
import Fetching from '../Fetching';
const UserCart = () => {
  const{imageProfile}=useLogin()
  const {dataContext}=useLogin()
  // console.log("the email of user is ",email)
const [isUpdate, setIsUpdate] = useState(false)
// const apiId=`https://store-wbly.onrender.com/user/${user_id}`
const {user}=useAuth()

const [data, setdata] = useState({});
const [userId,setUserId]=useState(null)
useEffect(()=>{
  const fetch=async()=>{
      const configuration={
          method:"Get",
          url:`https://store-wbly.onrender.com/userbyemail/${dataContext}`
        }
        await axios(configuration)
        .then((result)=>
        { 
          setdata(result.data)
          setUserId(result.data.user_id)
          console.log("the user id is",userId)
        })
        .catch((err)=>
        {err=new Error()
      console.log("no data")
    }
)};
      fetch();
},[dataContext,userId]);

// //////////////////

  // console.log("the data is ->>", data)

  // const [filteredFavorites, setFilteredFavorites] = useState([]);

  // useEffect(() => {
  //   // Create a map to store items by item_id
  //   const itemMap = new Map();
  //  data.favorite && data.favorite.forEach((item) => {
  //     if (!itemMap.has(item.item_id)) {
  //       itemMap.set(item.item_id, item);
  //     }
  //   });

  //   // Convert map values to an array
  //   const filteredItems = Array.from(itemMap.values());

  //   setFilteredFavorites(filteredItems);
    
  // }, []);
  // console.log("the ff is",filteredFavorites)





  //  update pic ////////////////////////////////////////////////////////////////////////////////////
  const {removeImage,nameFunContext,removeName }=useLogin()
  const NameCard =data.full_name && data.full_name;
  const [full_name,setFullName]=useState(NameCard)
  const imgCard =data.image_url && data.image_url;
  // console.log(data.image_url)
  const [image_url, setImageUrl] = useState(imgCard);

  const update = async (e) => {
    e.preventDefault()

    const configuration = {
      method: "Put",
      url: "https://store-wbly.onrender.com/user/" + data.user_id,
      data: {
        image_url,
        full_name
        // favorite:filteredFavorites
      }

    }
    await axios(configuration)
      .then((result) => {
        // console.log("the Update of image success", result.data)
        setIsUpdate(true)
        removeImage()
        imageProfile(image_url)
        removeName()
        nameFunContext(full_name)
        
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
    window.location.reload(true);
  };






//  Delete items from fav //////////////////
const  dataItems =Fetching("https://store-wbly.onrender.com/items")
const handleDamege = (e) => {
  e.preventDefault()
  const databaseItemIds = new Set(dataItems.data.map(item => item.item_id));
  console.log("the set of ids ",databaseItemIds)
  filterFavItem(databaseItemIds)
  
};

const filterFavItem=(databaseItemIds)=>{
const favoriteItemsInDatabase =data.favorite.filter(item =>
  databaseItemIds.has(item.item_id)
);

console.log(favoriteItemsInDatabase)
handleDeleteItem(favoriteItemsInDatabase)
}

const handleDeleteItem= (favoriteItemsInDatabase)=>{
  const configuration = {
    method: "Put",
    url: "https://store-wbly.onrender.com/user/" + data.user_id,
    data: {
      favorite:favoriteItemsInDatabase
    }

  }
   axios(configuration)
    .then((result) => {
      
      window.location.reload(true)
      
    })
    .catch((err) => {
      err = new Error()
      console.log("fav dosenot delet it")
    })

}


return (<section>
  {user?(<>
  <div className='div-container'
  style={{
    display:'flex',flexWrap:"nowrap",
  position:'relative',marginLeft:"40%",width:"100%"}}>
    <div className="image-area" style={{position:'absolute',top:"30%",left:"30%"}} >
      <div className="img-wrapper" key={data.user_id}>
        <img
          src={data.image_url} alt='' 
          />

        <h2 style={{color:"blue"}}
        >{data.full_name}</h2>
           <ul>
          <li>
          <p
            onClick={openModal}
            style={{color:'blue',fontSize:"1rem",backgroundColor:"none",top:"0",cursor:"pointer"}}
          >Edit</p>
          </li></ul>
          
        { isModalOpen && <Model 
          isOpen={openModal} 
          closeModal={closeModal}
          isModalOpen={isModalOpen}
            image_url1={image_url}
            setImageUrl1={setImageUrl}
            update={update}
            isUpdate={isUpdate}
            // ///////
            full_name={full_name}
            setFullName={setFullName}
            // handleUpdateFullName={handleUpdateFullName}
            
          />}
      </div>
    </div>
    <span style={{position:'absolute',bottom:"30%",left:"0",
    color:'blue',fontSize:"1.3rem",fontWeight:"bold"}}>
      <button  onClick={handleDamege}
      style={{width:"300px"}}
      >Refresh your items</button>
 </span>
 </div>
{/* // ////////////////////// Favorite item /////////////////////////// */}

<section className="articles" style={{marginTop:"3%",marginLeft:'50%',marginRight:"40px"}}>
  
  {data.favorite&&data.favorite.map((item)=>
      
      <div className="container page-wrapper"  key={item.item_id}>
  <div className="page-inner">
    <div >
      <div className="el-wrapper">
        <div className="box-up" >
          <img className="img" style={{width:"70%",overflow:"cover"}} src={item.image_url} alt=""/>
          <div className="img-info">
            <div className="info-inner">
            </div>
            <div className="a-size"> Sizes : <span className="size">S , M , L , XL</span></div>
          </div>
        </div>

        <div className="box-down">
          <div className="h-bg">
            <div className="h-bg-inner"></div>
          </div>

          <p className="cart">
            <span className="price">{item.price}$</span>
           
            { user &&  (
                 <span className="add-to-cart"> Buy Now</span>

                 ) }
            

          </p>
        </div>
      </div>
    </div>
  </div>
</div>
   )} 

</section>
  
</>

    ):( <p>Please log in to access the profile page.</p>)}
  </section>
  )

}

export default UserCart

