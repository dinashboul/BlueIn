import React, { useState, useEffect } from 'react'
import '/home/dinashboul/React_contextApi/myapp/src/componenets/Home/homestyle.css'
import axios from 'axios'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Fetching from '../Fetching'
import { useAuth } from '../../contexts/AuthContext'
import { useLogin } from '../../contexts/LoginContext'
import DeleteItem from '../Crud-Process/DeleteItem'
import UpdateItem from '../Crud-Process/UpdateItem'
function Home() {

  const { user } = useAuth()
  const { dataContext } = useLogin()
  const { adminContext } = useLogin()
  const {imageProfile}=useLogin()
  const [userId, setUserId] = useState(null)
  // console.log("the email is ", dataContext)
  const { data } = Fetching('https://store-wbly.onrender.com/items');

  const [favorite, setFavItem] = useState([])

  // ////////////// User Info ////////////////////////

  useEffect(() => {
    const fetchData = async () => {
      if (dataContext && dataContext.email) {
        try {
          const response = await axios.get(`https://store-wbly.onrender.com/userbyemail/${dataContext.email}`);
          console.log(response.data.user_id);
          setUserId(response.data.user_id);
          setFavItem(response.data.favorite)
          response.data.image_url && imageProfile(response.data.image_url)
          // console.log("the image is",response.data.image_url)
        } catch (error) {
          // console.error("Error fetching user data:", error);
        }
      } else {
        console.log("No email data to fetch");
      }
    };

    fetchData();
  }, []);
  // ////////////////////////// add to Favoutite///////////////
  const handleAddToCart = async (item,id,e) => {
    e.preventDefault()
    console.log("the item is ",item)
    console.log("the favourite",favorite)
    const exists=favorite.some(element=>element.item_id===id)
    if (exists) { console.log ("This item is exists in your cart")
    
  }
    else{
      console.log("this item is not exists")
      // console.log("the favourite--1",favorite)

    // setFavItem([...favorite, item]);
    // console.log("the favourite--2",favorite)

    const configuration = {
      method: "Put",
      url:`https://store-wbly.onrender.com/user/ ${userId}`,
      data: {
        favorite:[...favorite, item]
      }

    }
    await axios(configuration)
      .then((result) => {
        console.log("userId",userId)
        console.log("favourite data is-->",favorite)
        window.location.reload(true)
      })
      .catch((err) => {
        err = new Error()
        console.log("Faild Updated")
      })
    }
  }


  const [deleteItem, setDeleteItem] = useState(null);
  const  handleDeleteItem = (itemId,e) => {
    e.preventDefault()
    // console.log ("the id of deleted item is",itemId)
    setDeleteItem(itemId)
  }

  const [updateItem,setUpdateItem]=useState(null)
  const handleUpdate=(itemId,e)=>{
    e.preventDefault()
    setUpdateItem(itemId)
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

  return (
    <section className="articles" >
      
{data && data.map(item => (
<div class="container" key={item.item_id}>
        <div class="card" style={{backgroundImage:`${item.image_url}`}}>
            <div class="imgBx">
                <img src={item.image_url} alt=""/>
            </div>

            <div class="contentBx">

                <h2>Nike Shoes</h2>

                <div class="size">
                    <h3>Size :</h3>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div>

                <div class="color">

                    <h3>Color :</h3>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                { user && !adminContext ? (
                <button  onClick={(e) => handleAddToCart(item,item.item_id,e)} >Buy Now</button>
                ) : (<></>)}
                {adminContext ?
              (<div style={{display:"flex",justifyContent:"space-arround",gap:"10px"}}>
              <button
              onClick={(e)=>handleDeleteItem(item.item_id,e)}
              >Delete Item</button>
              
              <button
              onClick={(e)=>handleUpdate(item.item_id,e)}
              >Edit Item</button>
              
              </div>
              ):
              (<></>)}
            </div>

        </div>
    </div>
))}
{deleteItem !==null &&<DeleteItem deleteItem={deleteItem}/>}
      
      {updateItem!==null&& <UpdateItem 
      isOpen={openModal} 
      closeModal={closeModal}
      itemId={updateItem}/>}
    </section>

  )

}
export default Home;

// {data && data.map(item => (
//   <article key={item.item_id}>
//     <div className="article-wrapper">
//       <figure>
//         <img src={item.image_url} alt="" />
//       </figure>
//       <div className="article-body">
//         { user && !adminContext ? (
//           <button
//             onClick={(e) => handleAddToCart(item,item.item_id,e)}
//           >Add To Cart</button>) : (<></>)}
        
//         {adminContext ?
//         (<div style={{display:"flex",justifyContent:"space-arround",gap:"10px"}}>
//         <button
//         onClick={(e)=>handleDeleteItem(item.item_id,e)}
//         >Delete Item</button>
        
//         <button
//         onClick={(e)=>handleUpdate(item.item_id,e)}
//         >Edit Item</button>
        
//         </div>
//         ):
//         (<></>)}
        
        
        
//         <h2>{item.name}</h2>
//         <h2>
//           {item.categories}
//         </h2>
//         <h2>
//           {item.description}
//         </h2>
//         <Link to="/login" className="read-more" >
//           Price is {item.price}
//         </Link>
//       </div>
//     </div>
//   </article>
// ))}
// {deleteItem !==null &&<DeleteItem deleteItem={deleteItem}/>}

// {updateItem!==null&& <UpdateItem 
// isOpen={openModal} 
// closeModal={closeModal}
// itemId={updateItem}/>}
