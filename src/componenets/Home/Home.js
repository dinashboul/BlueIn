import React, { useState, useEffect } from 'react'
import '/home/dinashboul/React_contextApi/myapp/src/componenets/Home/homestyle.css'
import axios from 'axios'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Fetching from '../Fetching'
import { useAuth } from '../../contexts/AuthContext'
import { useLogin } from '../../contexts/LoginContext'
import DeleteItem from '../Crud-Process/DeleteItem'
function Home() {

  const { user } = useAuth()
  const { dataContext } = useLogin()
  const { adminContext } = useLogin()
  const [userId, setUserId] = useState(null)
  console.log("the email is ", dataContext)
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
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("No email data to fetch");
      }
    };

    fetchData();
  }, []);
  // ////////////////////////// add to Favoutite///////////////
  const handleAddToCart = async (e, item) => {
    e.preventDefault()
    const configuration = {
      method: "Put",
      url: "https://store-wbly.onrender.com/user/" + userId,
      data: {
        favorite
      }

    }
    await axios(configuration)
      .then((result) => {
        handleArray(item)
        console.log("favourite data is-->", result.data)

      })
      .catch((err) => {
        err = new Error()
        console.log("Faild Updated")
      })

  }

  const handleArray = (item) => {
    setFavItem(prevFavItems => [...prevFavItems, item]);
  }

  const [deleteItem, setDeleteItem] = useState(null);
  const  handleDeleteItem = (itemId) => {
    // console.log ("the id of deleted item is",itemId)
    setDeleteItem(itemId)
  }

  return (
    <section className="articles">
      {data && data.map(item => (
        <article key={item.item_id}>
          <div className="article-wrapper">
            <figure>
              <img src={item.image_url} alt="" />
            </figure>
            <div className="article-body">
              {!adminContext && user ? (
                <button
                  onClick={(e) => handleAddToCart(e, item)}
                >Add To Cart</button>
              ) : (<>
              <button
              onClick={()=>handleDeleteItem(item.item_id)}
              >Delete Item</button>
              <DeleteItem deleteItem={deleteItem}/>
              </>)}
              
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
      ))}
    </section>




  )

}



export default Home;