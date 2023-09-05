import React from 'react'
import { Modal, Button } from "react-bootstrap";

function Model({ isOpen, closeModal,image_url1,setImageUrl1,update,isUpdate,isModalOpen }) {
  console.log(closeModal,isModalOpen)
  const styleBtn={
   fontSize:"1rem",
   color:"white",
   fontWeight:"bold"
  }

  const message={
    width: "500px",
    height:"auto",
    padding: "20px",
    fontSize:"1.5rem",
    borderRadius: "10px",
    boxShadow:" 0px 4px 6px rgba(0, 0, 0, 0.1)", 
    backgroundColor:" #ecf0f3",
    color:"blue",
    marginTop:"30px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
    return (
    
    <Modal  className="modal-overlay"
     show={isOpen} onHide={closeModal} 
     >
      <Modal.Title> <h1  style={{marginTop:"10px",marginLeft:"50px",color:"blue",fontWeight:"bold",fontSize:"2.5rem"}} > Change Your Photo</h1></Modal.Title>
      <Modal.Body  style={{backgroundColor:" #ecf0f3",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"100px"}}> 
      <input type="text " style={{backgroundColor:"white",color:"blue",fontSize:"2em"}}  
      value ={image_url1}
       onChange={(e) =>
        setImageUrl1(e.target.value)}
        required/>
      </Modal.Body>
      <Modal.Footer style={{display:"flex",justifyContent:"space-around"}}>
        <Button style={styleBtn} variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button style={styleBtn} variant="primary" onClick={update}>
          Save Changes
        </Button>
        
      </Modal.Footer>
      {isUpdate && <div style={message}>
    <p>Picture Updated 😃</p>
  </div>}
    </Modal>
    
    
   
  )
}

export default Model