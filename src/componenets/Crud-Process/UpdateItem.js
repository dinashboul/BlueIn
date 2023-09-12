import axios from "axios";
import React, {  useState } from "react";
import "./create.css"
import "./modal.css"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Fetching from "../Fetching";
function UpdateItem() {
  const {itemId} = useParams();
  const { data,isLoading } = Fetching(`https://store-wbly.onrender.com/items/${itemId}`)

  //  Get Item By id :
  console.log("itemid in update file",data )
  
   const [name, setNameItem] =  useState("")
  const [description, setDescription] = useState("")
  const [image_url, setImageUrl] = useState("")
  const [price, setPrice] = useState("")
  const inputValue ="";
  const [categories, setcategories] = useState([])
  
  const url = `https://store-wbly.onrender.com/items/${itemId}`
  const handleUpdateItem = (e) => {
    e.preventDefault()
    const configrations = {
      method: "PUT",
      url: url,
      data: {
       name: !name? data.name : name,
        description :!description?data.description: description,
        image_url:!image_url ? data.image_url:image_url,
        price:!price ? data.price:price,
        categories:!categories ?data.categories : [...categories, inputValue]
      }

    }
    axios(configrations)
      .then((res) => {console.log("the data is updated")
      window.location.reload(true);
   
    })
      .catch((err) => console.log("the err ", err))
  }
  const handleCategoryChange = (option,e) => {
    const selectedOptions = [...categories,option]
    setcategories(selectedOptions);
  };
  return (<>
   {!isLoading? (
    <>
        <div className="info" style={{position:"absolute", top:'10%',left:"10%"}}>
          <img className="icon ion-ios-ionic-outline" 
          style={{width:"200px",height:"200px"}}
          aria-hidden="true" alt="" src={data.image_url}/>
          
        </div>
        <form action="#" 
          style={{marginTop:"5%",left:"30%",width:"30%",bottom:'80%'}}
            onSubmit={(e) => handleUpdateItem}
            className="signupForm" >
          <ul className="noBullet" >
            <li> <h2
              style={{ color: "blue", fontWeight: "bold", fontSize: "2rem", paddingTop: "10px" }}>
              Update Item</h2></li>
            <li>
              <label htmlFor="inputField"></label>
              <input type="text" className="inputFields" id="username" name="pieceName" placeholder={data.name}
                value={name}
                onChange={(e) => setNameItem(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="inputField"></label>
              <input type="textarea" className="inputFields" id="descript" name="Description" placeholder={data.description}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="inputField"></label>
              <textarea type="textarea"  className="inputFields" id="image" name="image" placeholder={data.image_url}
                value={image_url}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </li>

            <li>

            <select
        className="inputFields"
        style={{ color: "black" }}
        id="categories"
        name="categories"
        multiple
        value={categories}
        onChange={(e)=>handleCategoryChange(e.target.value)}
      >
        <option disabled>Category</option>
        <option value="women">Women</option>
        <option value="man">Man</option>
        <option value="kids">Kids</option>
        <option value="bags">Bags</option>
        <option value="accessories">Accessories</option>
      </select>

            </li>
            <li>
              <label htmlFor="inputField"></label>
              <input type="text" className="inputFields" id="price" name="number" placeholder={data.price}

                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </li>

            <li >
              <div style={{display:"flex",justifyContent:"space-around",gap:"300px"}}>
              <button type="submit" id="join-btn" name="join" alt="Join" value="Join"
                 style={{width:"100px",display:"flex",alignItems:"center",justifyContent:"center",left:"30%"}}
                onClick={handleUpdateItem}
              >Submit</button>
              
              </div>
            </li>
          </ul>
        </form>
        
   </>
   ):(<div> <h1 style={{color:"blue",fontSize:"2rem",position:"absolute",top:"5%",left:"8%"}}>Is Loading ....</h1></div>)}</>
  )
}

export default UpdateItem