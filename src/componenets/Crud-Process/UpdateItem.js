import axios from "axios";
import React, {  useState } from "react";
import { Modal } from "react-bootstrap";
import "./modal.css"
function UpdateItem({ objOfItem, isOpen, closeModal }) {
  //  Get Item By id :
  console.log("itemid in update file", objOfItem)
  const [name, setNameItem] = useState(objOfItem.name)
  const [description, setDescription] = useState(objOfItem.description)
  const [image_url, setImageUrl] = useState(objOfItem.image_url)
  const [price, setPrice] = useState(objOfItem.price)
  const inputValue ="";
  const url = `https://store-wbly.onrender.com/items/${objOfItem.item_id}`
  console.log(url)
  const [categories, setcategories] = useState(objOfItem.categories)


  const handleUpdateItem = (e) => {
    e.preventDefault()
    const configrations = {
      method: "PUT",
      url: url,
      data: {
        name,
        description,
        image_url,
        price,
        categories: [...categories, inputValue]
      }

    }
    axios(configrations)
      .then((res) => {console.log("the data is updated")
   
    })
      .catch((err) => console.log("the err ", err))
  }
  const handleCategoryChange = (option,e) => {
    const selectedOptions = [...categories,option]
    setcategories(selectedOptions);
  };
  return (
    
    <Modal 
      show={isOpen} onHide={closeModal} >
      <div className="signupSection" style={{ display: "flex", justifyContent: "center", alignItems: "center",
       width:"200px",marginTop:'100%',height:"100px"}}>
        <div className="info" style={{marginRight:"50px"}}>
          <img className="icon ion-ios-ionic-outline" 
          style={{width:"200px",height:"200px"}}
          aria-hidden="true" alt="" src={image_url}/>
          
        </div>
        {/* ////////// form //////// */}
        <form action="#"    onSubmit={(e) => handleUpdateItem} >
          <ul className="noBullet">
            <li> <h2
              style={{ color: "blue", fontWeight: "bold", fontSize: "2rem", paddingTop: "10px" }}>
              Update Item</h2></li>
            <li>
              <label htmlFor="inputField"></label>
              <input type="text" className="inputFields" id="username" name="pieceName" placeholder="PieceName"
                value={name}
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
              <textarea type="textarea" style={{ marginLeft: "0px" }} className="inputFields" id="image" name="image" placeholder="ImageUrl"
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
              <input type="text" className="inputFields" id="price" name="number" placeholder="Price"

                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </li>

            <li id="center-btn" >
              <button type="submit" id="join-btn" name="join" alt="Join" value="Join"
                onClick={handleUpdateItem}
              >Submit</button>
              <button id="join-btn" onClick={closeModal}>Close</button>
            </li>
          </ul>
        </form>
      </div>
    </Modal>
 
  )
}

export default UpdateItem