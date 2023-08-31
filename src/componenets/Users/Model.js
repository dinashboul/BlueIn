import React from 'react'
import { Modal, Button,Input } from "react-bootstrap";
// import "/home/dinashboul/React_contextApi/myapp/src/componenets/Users/usr.css"

function Model({ isOpen, closeModal,image_url1,setImageUrl1,update,isUpdate,isModalOpen }) {
  console.log(closeModal,isModalOpen)
  const styleBtn={
   fontSize:"1rem",
   color:"white",
   fontWeight:"bold"
  }

  const message={
    width: "300px",
    padding: "20px",
    fontSize:"1.8rem",
    borderRadius: "10px",
    boxShadow:" 0px 4px 6px rgba(0, 0, 0, 0.1)", 
    backgroundColor:" #ecf0f3",
    color:"blue"
  }
    return (
    <section >
    <Modal  className="no-inherit"
     show={isOpen} onHide={closeModal} 
     >
      <Modal.Title> <h1  style={{marginTop:"10px",marginLeft:"70px",color:"blue",fontWeight:"bold"}} > Change Your Photo</h1></Modal.Title>
      <Modal.Body  style={{backgroundColor:" #ecf0f3",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"100px"}}> 
      <input type="text " style={{backgroundColor:"white",color:"blue",fontSize:"2em"}}  
      value ={image_url1}
       onChange={(e) =>
        setImageUrl1(e.target.value)}
        required/>
      </Modal.Body>
      <Modal.Footer style={{display:"flex",justifyContent:"center"}}>
        <Button style={styleBtn} variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button style={styleBtn} variant="primary" onClick={update}>
          Save Changes
        </Button>
        {isUpdate && <div style={message}>
    <p>Picture Updated 😃</p>
  </div>}
      </Modal.Footer>
      
    </Modal>
    
    
    </section>
  )
}

export default Model