import React from 'react'
import { Link,useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import "./categories.css"
function Categories() {
  const location = useLocation();
  
  return (
  
    <section className="categorie-container"
    // style={{backgroundColor:theme === 'dark' ? '#514e4e' : ''}}
    >
        <Link to="/category/kids" style={{ marginLeft: '8%' }}
          className={` ${location.pathname === '/category/kids' ? 'active-link' : ''}`}

        >
          Kids
        </Link>
        <Link to="/category/women"
        className={` ${location.pathname === '/category/women' ? 'active-link' : ''}`}
        >Women</Link>
        <Link to="/category/man"
        className={` ${location.pathname === '/category/man' ? 'active-link' : ''}`}
        >Man</Link>
        <Link to="/category/accessories"
        className={` ${location.pathname === '/category/accessories' ? 'active-link' : ''}`}
        >Accessories</Link>
        <Link to="/category/bags" style={{ marginRight: '8%' }}
        className={` ${location.pathname === '/category/bags' ? 'active-link' : ''}`}

        >
          Bags
        </Link>
            
    </section>
   
 
  )
}

export default Categories