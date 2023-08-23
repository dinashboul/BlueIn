import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
function UpdateItem(item_id,isOpen,closeModal) {
    //  Get Item By id :
    console.log("itemid in update file",item_id)
    const [itemData,setItemData]=useState({})
    const[name,setNameItem]=useState('')
    const [description,setDescription]=useState('')
    const[image_url,setImageUrl]=useState(null)
    const[price,setPrice]=useState('')
    const [inputValue, setInputValue] = useState('');

    const[categories,setCategories]=useState([])

    useEffect(()=>{
    const getItemData=(itemId,e)=>{
        const configration ={
            method:"GET",
            url:"",
        }
        axios(configration)
        .then((res)=>{
            setItemData(res.data)
        })
        .catch((err)=> console.log("the err is ",err))
    }
    getItemData();
},[]);

const handleUpdateItem=()=>{
    const configrations={
        method:"PUT",
        url:"",
        data:{
            data:{
                name,
                description,
                image_url,
                price,
                categories:[...categories, inputValue]
                
      
              }
        }
    }
    axios(configrations)
    .then((res)=>console.log("the data is updated"))
    .catch((err)=>console.log("the err ",err))
}
  return (
    <Modal  className="modal-overlay"
    show={isOpen} onHide={closeModal} >
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
    <form action="#"  className="signupForm" onSubmit={handleUpdateItem} >
      <ul className="noBullet">
        <li> <h2 
        style={{color:"blue",fontWeight:"bold",fontSize:"2rem",paddingTop:"10px"}}>
          Add New Item</h2></li>
        <li>
          <label htmlFor="inputField"></label>
          <input type="text" className="inputFields" id="username" name="pieceName" placeholder="PieceName"
            value={itemData.name}
            onChange={(e) => setNameItem(e.target.value)}
             />
        </li>
        <li>
          <label htmlFor="inputField"></label>
          <input type="textarea" className="inputFields" id="descript" name="Description" placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
             />
        </li>
        <li>
          <label htmlFor="inputField"></label>
          <textarea type="textarea" style={{marginLeft:"0px"}} className="inputFields" id="image" name="image" placeholder="ImageUrl"
            value={itemData.image_url}
            onChange={(e) => setImageUrl(e.target.value)}
             />
        </li>

        <li>
          <label htmlFor="inputField"></label>
          <input type="text" className="inputFields" id="categories" name="categories" placeholder="categories"
            value={itemData.categories}
            onChange={(e) => setInputValue(e.target.value)}           />
        </li>
        <li>
          <label htmlFor="inputField"></label>
          <input type="text" className="inputFields" id="price" name="number" placeholder="Price"

            value={itemData.price}
            onChange={(e) => setPrice(e.target.value)}
             />
        </li>
        
        <li id="center-btn" >
        <button type="submit" id="join-btn" name="join" alt="Join" value="Join">Submit</button>
        <button  id="join-btn"  onClick={closeModal}>Close</button>
        </li>
      </ul>
    </form>
  </div>
  </Modal>
  )
}

export default UpdateItem