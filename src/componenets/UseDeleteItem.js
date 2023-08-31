import React from 'react'
import axios from 'axios'
function UseDeleteItem(url,id) {
    const handleDelete =()=>{
        const configrations={
             method:"DELETE",
             url:url+id,
 
         }
         axios(configrations)
         .then(()=>{
             console.log("The item is deleted")
             window.location.reload(true)
         })
         .catch((err)=>console.log("the err is ",err))
 
     }
     handleDelete()
  return ( <></>)
  
}

export default UseDeleteItem