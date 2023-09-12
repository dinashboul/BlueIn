import React, { useState, useEffect } from 'react'
import './homestyle.css'
import axios from 'axios'
// import Fetching from '../Fetching'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useAuth } from '../../contexts/AuthContext'
import { useLogin } from '../../contexts/LoginContext'
import DeleteItem from '../Crud-Process/DeleteItem'
import Carousal from './Carousal'
import { useSearchData } from '../../contexts/SearchContext'
import { useTheme } from '../../contexts/ThemeContext'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import UseFetch from '../UseFetch'
function Home() {
const{theme}=useTheme()
  const history=useHistory()
  const { user } = useAuth()
  const { dataContext } = useLogin()
  const { adminContext } = useLogin()
  const {imageProfile}=useLogin()
  const [userId, setUserId] = useState(null)
  const {searchData}=useSearchData()  
  const {nameFunContext}=useLogin()
  const { data,messNotFound} = searchData == null ? UseFetch('https://store-wbly.onrender.com/items') : UseFetch(searchData);
  
  const [favorite, setFavItem] = useState([])
  
    // ////////////// User Info ////////////////////////

  useEffect(() => {
    const fetchData = async () => {
      if (dataContext && dataContext) {
        try {
          const response = await axios.get(`https://store-wbly.onrender.com/userbyemail/${dataContext}`);
          console.log(response.data.user_id);
          setUserId(response.data.user_id);
          response.data.favorite?setFavItem(response.data.favorite):setFavItem([])
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
  },[dataContext,imageProfile,nameFunContext]);
  // ////////////////////////// add to Favoutite///////////////
  const[favItemFound,setFavItemFound]=useState(false)
  const[favMessage,setFavMessage]=useState("")
  const handleAddToCart = async (item,id,e) => {
    e.preventDefault()
    console.log("the item is ",item)
    console.log("the favourite",favorite)
    if (!favorite) {
     
    }
    const exists=favorite.some(element=>element.item_id===id)

    if (exists) {
       console.log ("This item is exists in your cart",favItemFound)
       setFavMessage("Item In Cart")

      isOpen()
        }
    else{
    console.log("this item is not exists",favItemFound)
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
        history.push('/usercart')
      })
      .catch((err) => {
        err = new Error()
        console.log("Faild Updated")
      })
      isClose()
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

  
  return (<>
    <Carousal />
    <section className={`articles ${theme === 'dark' ? 'dark-theme' : ''}`} >
    {/* {favItemFound ? <h1 style={{marginTop:"200px"}}>Item In Cart</h1>:<></>} */}
    {<h1 style={{position:"absolute",top:"3%",left:"40%",color:'blue',fontWeight:'bold',fontSize:"3rem",}}>{messNotFound}</h1>}
    {<h1 style={{position:"absolute",top:"3%",left:"40%",color:'blue',fontWeight:'bold',fontSize:"3rem"}}>{favMessage}</h1>}
    
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

          <p className="cart" >
            <span className="price">{item.price}$</span>
            <span className="add-to-cart">
            { user && !adminContext ? (<>
                <span 
                  style={{cursor:"pointer"}}
                  className="txt"
                
                onClick={(e) => handleAddToCart(item,item.item_id,e)} >Add To Cart</span>
                </>
                ) : (<></>)
                
                }
                
            {adminContext ?
              (<span className="txt" style={{display:"flex",justifyContent:"space-arround",gap:"30px"}}>
              <span style={{backgroundColor:"#ADC4CE",color:"black",cursor:"pointer"}}
              onClick={(e)=>handleDeleteItem(item.item_id,e)}
              >Delete Item</span>
              
              <Link to={`/updateitem/${item.item_id}`}
              style={{backgroundColor:"#ADC4CE",color:"black",border:"2px",cursor:"pointer"}}
              // onClick={(e)=>handleUpdate(item.item_id,item.price,item.categories,item.image_url,item.name,item.description,e)}
              >Edit Item</Link>
              
              </span>
              ):
              (<></>)}

            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
   ))} 
   {deleteItem !==null &&<DeleteItem deleteItem={deleteItem}/>}
</section>

    </> )

}
export default Home;

