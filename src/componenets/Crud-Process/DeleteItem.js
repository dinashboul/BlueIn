import axios from 'axios'
import React from 'react'

function DeleteItem({deleteItem}) {
    // console.log("deleteitem is ",deleteItem)
    const handleDelete =()=>{
       const configrations={
            method:"DELETE",
            url:`https://store-wbly.onrender.com/items/${deleteItem}`,

        }
        axios(configrations)
        .then(()=>{
            console.log("he item is deleted")
            window.location.reload(true)
        })
        .catch((err)=>console.log("the err is ",err))

    }
    handleDelete()
  return (<></>)
}

export default DeleteItem