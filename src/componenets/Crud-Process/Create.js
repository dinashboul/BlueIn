import React, { useState } from 'react';
import './create.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {useLogin} from '../../contexts/LoginContext'
import Carousal from '../Home/Carousal';
function Create() {
  const history=useHistory();
  

  const [name, setName] = useState("")
  const [description, setDescript] = useState("")
  const [imageUrl, setImageUrl] = useState('')
  const [price, setPrice] = useState(0)

  const [categories, setCategories] = useState([])
  
  const{adminContext}=useLogin()

  
  const handleCategoryChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setCategories(selectedOptions);
  };
 
  const handleAdd= async(e) =>{
    e.preventDefault();
      const configuration={
        method:"Post",
        url:"https://store-wbly.onrender.com/items",
        data:{
          name,
          description,
          image_url: imageUrl,
          price,
          categories:categories
          

        }

      }
      await axios(configuration)
      .then((result)=>
      { console.log("item is adding")
      history.push("/")

      })
      .catch((err)=>
      err=new Error())
    }
  


return (<>
  {adminContext ? (
    <section  className='creat-container' >
   
   <Carousal />
    
    {/* ////////// form //////// */}
    <form action="#" 
    className="signupForm" onSubmit={handleAdd} >
      <ul className="noBullet">
        <li> <h2 
        style={{color:"blue",fontWeight:"bold",fontSize:"2rem",paddingTop:"10px",position:"absolute",left:"30%",top:"5%"}}>
          Add New Item</h2></li>
        <li>
          <label htmlFor="inputField"></label>
          <input type="text" className="inputFields" id="username" name="pieceName" placeholder="PieceName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
        </li>
        <li>
          <label htmlFor="inputField"></label>
          <input type="textarea" className="inputFields" id="descript" name="Description" placeholder="Description"
            value={description}
            onChange={(e) => setDescript(e.target.value)}
            required />
        </li>
        <li>
          <label htmlFor="inputField"></label>
          <input type="text" className="inputFields" id="image" name="image" placeholder="image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}    
             required     
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
        onChange={handleCategoryChange}
      >
        <option disabled>Category</option>
        <option value="women">Women</option>
        <option value="man">Man</option>
        <option value="kids">Kids</option>
        <option value="bags">Bags</option>
        <option value="accessories">Accessories</option>
      </select>
      <p className="inputFields" >Selected Categories: {categories.join(', ')}</p>

        </li>
        <li>
          <label htmlFor="inputField"></label>
          <input type="number" className="inputFields" id="price" name="number" placeholder="Price"

            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required />
        </li>

        <li id="center-btn">
          <button type="submit" id="join-btn" name="join" alt="Join" value="Join">Submit</button>
        </li>
      </ul>
    </form>
  </section>
  ):(<></>)}</>
  
)
}

export default Create;