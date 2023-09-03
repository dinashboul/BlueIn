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

  const [categories, setcategories] = useState([])
  
  const{adminContext}=useLogin()

  const handleCategoryChange = (option,e) => {
    const selectedOptions = [...categories,option]
    setcategories(selectedOptions);
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
    <section style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
   <section  style={{marginTop:"10%",gridColumn:"1",marginLeft:"20%"}}>
   <Carousal /></section>
  <div className="signupSection" style={{marginTop:"8%",gridColumn:"2"}}>
    <div className="info" style={{marginLeft:"10px"}}>
      <h2 style={{ 
        color:"blue",
        fontWeight:"bold",
        fontSize:"2rem",
        margin:"15px"
      }}
      >BlueIn</h2>
      <img className="icon ion-ios-ionic-outline" aria-hidden="true" alt="" src="https://png.pngtree.com/template/20200316/ourmid/pngtree-bird-blue-logo-template-image_354657.jpg" />
      <p></p>
    </div>
    {/* ////////// form //////// */}
    <form action="#"  style={{marginTop:"8%"}}
    className="signupForm" onSubmit={handleAdd} >
      <ul className="noBullet">
        <li> <h2 
        style={{color:"blue",fontWeight:"bold",fontSize:"2rem",paddingTop:"10px"}}>
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
        onChange={(e)=>handleCategoryChange(e.target.value)}
      >
        <option disabled>Category</option>
        <option value="women">Women</option>
        <option value="man">Man</option>
        <option value="kids">Kids</option>
        <option value="bags">Bags</option>
        <option value="accessories">Accessories</option>
      </select>
      <p>Selected Categories: {categories.join(', ')}</p>

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
  </div>
  </section>
  ):(<h1 style={{top:"50%",left:"40%",color:"blue", fontSize:"2rem"}} > This Page is sepcified to Admin</h1>)}</>
  
)
}

export default Create;