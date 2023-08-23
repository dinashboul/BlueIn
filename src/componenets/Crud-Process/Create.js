import React, { useState } from 'react';
import '/home/dinashboul/React_contextApi/myapp/src/style/create.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useAuth } from '../../contexts/AuthContext';
import { useLogin } from '../../contexts/LoginContext';
function Create() {
  const history=useHistory();
  const style = {
    background: "url(https://source.unsplash.com/TV2gg2kZD1o/1600x800)",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    height: "450px",
    textAlign: "center",
    display: "flex",
    color: "white",
    boxShadow: "3px 10px 20px 5px rgba(0, 0, 0, .5)",
  }

  const [name, setName] = useState("")
  const [description, setDescript] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [price, setPrice] = useState("")
  const [inputValue, setInputValue] = useState('');

  const [categories, setcategories] = useState([])
  
  const{adminContext}=useLogin()
 
 
  const handleAdd= async(e) =>{
    e.preventDefault();
      const configuration={
        method:"Post",
        url:"https://store-wbly.onrender.com/items",
        data:{
          name,
          description,
          imageUrl,
          price,
          categories:[...categories, inputValue]
          

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
  <div className="signupSection">
    <div className="info">
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
    <form action="#"  className="signupForm" onSubmit={handleAdd} >
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
          <textarea type="textarea" style={{marginLeft:"0px"}} className="inputFields" id="image" name="image" placeholder="ImageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required />
        </li>

        <li>
          <label htmlFor="inputField"></label>
          <input type="text" className="inputFields" id="categories" name="categories" placeholder="categories"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}           />
        </li>
        <li>
          <label htmlFor="inputField"></label>
          <input type="text" className="inputFields" id="price" name="number" placeholder="Price"

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
  ):(<h1 style={{top:"50%",left:"40%",color:"blue", fontSize:"2rem"}} > This Page is sepcified to Admin</h1>)}</>
  
)
}

export default Create;