import React from 'react';
  import Modal from "react-overlays/Modal";
import "./modalImage.css"
function Model({ isOpen, closeModal,image_url1,setImageUrl1,update,isUpdate,isModalOpen }) {
  console.log(isUpdate)
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  
    return (
     
      <Modal
  className="modal1"
  show={isModalOpen}
  onHide={closeModal}
  renderBackdrop={renderBackdrop}
>
  <div>
    <div className="modal1-header">
      <div className="modal1-title">Change Your Photo</div>
      <div>
        <span className="close-button" onClick={closeModal}>
          x
        </span>
      </div>
    </div>
    <div className="modal1-desc">
      <input
        type="text"
        value={image_url1}
        onChange={(e) => setImageUrl1(e.target.value)}
        required
      />
    </div>
    <div className="modal1-footer">
      <button className="secondary-button" onClick={closeModal}>
        Close
      </button>
      <button className="primary-button" onClick={update}>
        Save Changes
      </button>
      {isUpdate &&  <p>Picture Updated 😃</p> }
    
    </div>
  </div>
  
</Modal>

    
    )
}

export default Model
//   <Modal style={modalOverlay}
  //    show={isOpen} onHide={closeModal} 
  //    >
  //     <Modal.Title> <h1  style={{marginTop:"10px",marginLeft:"50px",color:"blue",fontWeight:"bold",fontSize:"2.5rem"}} > Change Your Photo</h1></Modal.Title>
  //     <Modal.Body  style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"100px"}}> 
  //     <input type="text " style={{backgroundColor:"white",color:"blue",fontSize:"2em"}}  
  //     value ={image_url1}
  //      onChange={(e) =>
  //       setImageUrl1(e.target.value)}
  //       required/>
  //     </Modal.Body>
  //     <Modal.Footer style={{display:"flex",justifyContent:"space-around"}}>
  //       <Button style={styleBtn} variant="secondary" onClick={closeModal}>
  //         Close
  //       </Button>
  //       <Button style={styleBtn} variant="primary" onClick={update}>
  //         Save Changes
  //       </Button>
        
  //     </Modal.Footer>
  //     {isUpdate && <div style={message}>
  //   <p>Picture Updated 😃</p>
  // </div>}
  //   </Modal>