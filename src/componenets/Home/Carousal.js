import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import '/home/dinashboul/React_contextApi/myapp/src/componenets/Home/carousal.css'
import Fetching from '../Fetching';
import { useTheme } from '../../contexts/ThemeContext';
function Carousal() {
  const {theme}=useTheme()
    const { data } = Fetching('https://store-wbly.onrender.com/items');
    
      const carouselData = data ? data.map((item, index) => ({
        image: item.image_url,
        caption: item.name,
      })) : [];
    
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
        
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
        width:"100%"
      }
      return (
        <div className={`App ${theme === 'dark' ? 'dark-theme' : ''}`}>
          <div style={{ textAlign: "center",marginBottom:"150px"}}>
            <div style={{
              padding: "0 20px"
            }}>
              <Carousel
                data={carouselData}
                time={800}
                width="100%"
                height="600px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={false}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                // thumbnails={false}
                style={{
                  textAlign: "center",
                  Width: "10%",
                  maxHeight: "500px",
                  margin: "40px auto",
                }}
              />
            </div>
          </div>
        </div>
      );
    }
    

export default Carousal