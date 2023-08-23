import React from 'react'
import { Modal, Button,Input } from "react-bootstrap";
import "/home/dinashboul/React_contextApi/myapp/src/componenets/Users/usr.css"

function Model({ isOpen, closeModal,image_url1,setImageUrl1,update,isUpdate,isModalOpen }) {
  console.log(closeModal,isModalOpen)
  const styleBtn={
    width:"10%",
    margin:"10px",
  
  }
    return (
    <section >
    <Modal  className="modal-overlay"
     show={isOpen} onHide={closeModal} 
     style={{zIndex:"1",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Modal.Body  style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"100px"}}> 
      <input type="text " style={{width:"20%",backgroundColor:"gray",color:"black",fontSize:"2em"}}  
      value ={image_url1}
       onChange={(e) =>
        setImageUrl1(e.target.value)}/>
      </Modal.Body>
      <Modal.Footer style={{display:"flex",justifyContent:"center"}}>
        <Button style={styleBtn} variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button style={styleBtn} variant="primary" onClick={update}>
          Save Changes
        </Button>
        {isUpdate && <h1
        style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"2rem",color:"blue",
         left:'0', margin:"100px",position:"absolute"
        }} 
        > Your picture is Updated</h1>}
      </Modal.Footer>
    </Modal>
    
    </section>
  )
}

export default Model