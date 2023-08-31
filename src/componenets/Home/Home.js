import React, { useState, useEffect } from 'react'
import './homestyle.css'
import axios from 'axios'
import Fetching from '../Fetching'
import { useAuth } from '../../AuthContext'
import { useLogin } from '../../contexts/LoginContext'
import DeleteItem from '../Crud-Process/DeleteItem'
import UpdateItem from '../Crud-Process/UpdateItem'
import Carousal from './Carousal'
import { useSearchData } from '../../contexts/SearchContext'
import { useTheme } from '../../contexts/ThemeContext'
function Home() {
const{theme}=useTheme()

  const { user } = useAuth()
  const { dataContext } = useLogin()
  const { adminContext } = useLogin()
  const {imageProfile}=useLogin()
  const [userId, setUserId] = useState(null)
  const {searchData}=useSearchData()  
  const {nameFunContext}=useLogin()

  const { data } = searchData == null ?
  Fetching('https://store-wbly.onrender.com/items'):
  Fetching(searchData)

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
          response.data.full_name &&nameFunContext( response.data.full_name)
          // console.log("the image is",response.data.image_url)
        } catch (error) {
          // console.error("Error fetching user data:", error);
        }
      } else {
        console.log("No email data to fetch");
      }
    };

    fetchData();
  }, [dataContext,imageProfile,nameFunContext]);
  // ////////////////////////// add to Favoutite///////////////
  const[favItemFound,setFavItemFound]=useState(false)
  const handleAddToCart = async (item,id,e) => {
    e.preventDefault()
    console.log("the item is ",item)
    console.log("the favourite",favorite)
    const exists=favorite.some(element=>element.item_id===id)
    if (exists) { console.log ("This item is exists in your cart",favItemFound)
      isOpen()
  }
    else{
      console.log("this item is not exists",favItemFound)
     isClose()
    const configuration = {
      method: "Put",
      url:`https://store-wbly.onrender.com/user/ ${userId}`,
      data: {
        favorite:[...favorite, item]
      }

    }
    await axios(configuration)
      .then((result) => {
        console.log("userId ",userId)
        console.log("favourite data is-->",favorite)
        window.location.reload(true)
      })
      .catch((err) => {
        err = new Error()
        console.log("Faild Updated")
      })
    }
  }
 const isOpen=()=>{
  setFavItemFound(true)

 }
 const isClose=()=>{
  setFavItemFound(false)

 }

  const [deleteItem, setDeleteItem] = useState(null);
  const  handleDeleteItem = (itemId,e) => {
    e.preventDefault()
    console.log ("the id of deleted item is",itemId)
    setDeleteItem(itemId)
  }

  const [updateItem,setUpdateItem]=useState({})
  const handleUpdate=(item_id,price,categories,image_url,name,description,e)=>{
    e.preventDefault()
    setUpdateItem({
      item_id ,
      price,
      categories,
      image_url,
      name,
      description

    })
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("opened")
  };

  const closeModal = (e) => { 
    setIsModalOpen(false);
    console.log("model is closed",isModalOpen)

  };

  return (<>
    <Carousal data={data}/>
    <section className={`articles ${theme === 'dark' ? 'dark-theme' : ''}`} >
    {/* {favItemFound ? <h1 style={{marginTop:"200px"}}>Item In Cart</h1>:<></>} */}

      {data && data.map(item => (
      <div className="container page-wrapper"  key={item.item_id}>
  <div className="page-inner">
    <div >
      <div className="el-wrapper">
        <h2 style={{marginLeft:"50px",color:"blue",fontSize:"2rem",fontWeight:"bold"}}>{item.name}</h2>
        <div className="box-up">
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

          <a className="cart" >
            <span className="price">{item.price}$</span>
            <span className="add-to-cart">
            { user && !adminContext ? (<>
                <span className="txt" onClick={(e) => handleAddToCart(item,item.item_id,e)} >Add To Cart</span>
                </>
                ) : (<></>)
                
                }
                
            {adminContext ?
              (<span className="txt" style={{display:"flex",justifyContent:"space-arround",gap:"10px"}}>
              <span style={{backgroundColor:"#ADC4CE",color:"black"}}
              onClick={(e)=>handleDeleteItem(item.item_id,e)}
              >Delete Item</span>
              
              <span
              style={{backgroundColor:"#ADC4CE",color:"black",border:"2px"}}
              onClick={(e)=>handleUpdate(item.item_id,item.price,item.categories,item.image_url,item.name,item.description,e)}
              >Edit Item</span>
              
              </span>
              ):
              (<></>)}

            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
   ))} 
   {deleteItem !==null &&<DeleteItem deleteItem={deleteItem}/>}
   
      {Object.keys(updateItem).length !==0 && <UpdateItem 
      isOpen={openModal} 
      closeModal={closeModal}
      objOfItem={updateItem}
      />}


    </section>

    </> )

}
export default Home;

