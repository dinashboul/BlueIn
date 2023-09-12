import React from 'react'
import Fetching from '../componenets/Fetching';
import "../componenets/Home/homestyle.css"
// import { useAuth } from '../contexts/AuthContext';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import { useLogin } from '../contexts/LoginContext';
function CategoriesPage({ category ,handleAddToCart,handleDeleteItem}) {
    const { data,isLoading } = Fetching("https://store-wbly.onrender.com/items")
    console.log("cate data is",data,isLoading)
    console.log("categoryField", category)
    let categoryItem=[]
    if(!isLoading) {
         categoryItem = data.filter((item) => item.categories.includes(`${category}`));
         console.log(categoryItem)
}
// const { user } = useAuth()
// const { adminContext } = useLogin()
    return (
        
        <section className='category-section'>
            
            {categoryItem.length !== 0? categoryItem.map((item) =>
            
                <div className="container page-wrapper" key={item.item_id}>
                    <div className="page-inner">
                        <div >
                            <div className="el-wrapper">
                                <div className="box-up">
                                    <img className="img" style={{ width: "70%", overflow: "cover" }} src={item.image_url} alt="" />
                                    <div className="img-info">
                                        <div className="info-inner">
                                        </div>
                                        <div className="a-size"> Sizes : <span className="size">S , M , L , XL</span></div>
                                    </div>
                                </div>

                                <div className="box-down">
                                    <div className="h-bg">
                                        <div className="h-bg-inner"></div>
                                    </div>
                                    <p className="cart" >
                                    <span className="price">{item.price}$</span>
                                    {/* <span className="add-to-cart">
            { user && !adminContext ? (<>
                <span 
                  style={{cursor:"pointer"}}
                  className="txt"
                
                onClick={(e) => handleAddToCart(item,item.item_id,e)} >Add To Cart</span>
                </>
                ) : (<></>)
                
                }
                
            {adminContext ?
              (<span className="txt" style={{display:"flex",justifyContent:"space-arround",gap:"30px"}}>
              <span style={{backgroundColor:"#ADC4CE",color:"black",cursor:"pointer"}}
              onClick={(e)=>handleDeleteItem(item.item_id,e)}
              >Delete Item</span>
              
              <Link to={`/updateitem/${item.item_id}`}
              style={{backgroundColor:"#ADC4CE",color:"black",border:"2px",cursor:"pointer"}}
              // onClick={(e)=>handleUpdate(item.item_id,item.price,item.categories,item.image_url,item.name,item.description,e)}
              >Edit Item</Link>
              
              </span>
              ):
              (<></>)}

            </span> */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            ):(<section style={{top:"50%",left:"50%",position:"absolute",color:"blue",fontSize:"2rem"}}><h1> No Items Matching</h1></section>)}
            
            </section>
    
    )
}

export default CategoriesPage