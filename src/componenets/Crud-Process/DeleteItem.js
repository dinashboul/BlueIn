import axios from 'axios'
import React from 'react'

function DeleteItem({deleteItem}) {
    // console.log("deleteitem is ",deleteItem)
    const handleDelete =()=>{
       const configrations={
            method:"DELETE",
            url:"",

        }
        axios(configrations)
        .then(()=>{
            console.log("he item is deleted")
        })
        .catch((err)=>console.log("the err is ",err))

    }
  return (handleDelete)
}

export default DeleteItem