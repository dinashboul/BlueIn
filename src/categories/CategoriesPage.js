import React from 'react'
import Fetching from '../componenets/Fetching';
import "../componenets/Home/homestyle.css"

function CategoriesPage({ category }) {
    const { data,isLoading } = Fetching("https://store-wbly.onrender.com/items")
    console.log("cate data is",data,isLoading)
    console.log("categoryField", category)
    let categoryItem=[]
    if(!isLoading) {
         categoryItem = data.filter((item) => item.categories.includes(`${category}`));
         console.log(categoryItem)
}
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
                                    <span className="price"> Price :{item.price}$</span></p>
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