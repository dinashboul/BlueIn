import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./footer.css"

function Footer() {
  return (
    <div className="d-flex flex-column h-100 ">


    <footer className="w-100 py-4 flex-shrink-0 position-absolute bottom-0 ">
        <div className="container py-4">
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 text-primary">BlueIn</h5>
                    <p className="small ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <p className="small  mb-0">&copy; Copyrights. All rights reserved. <a href='/' className="text-primary">BlueIn.com</a></p>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="mb-3 text-primary">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><p>Home</p></li>
                        <li><p>About</p></li>
                        <li><p>Get started</p></li>
                        <li><p>FAQ</p></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-primary mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><p>Home</p></li>
                        <li><p>About</p></li>
                        <li><p>Get started</p></li>
                        <li><p>FAQ</p></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-primary mb-3">BlueIn</h5>
                    <p className="small ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    
                </div>
            </div>
        </div>
    </footer>
</div>
  )
}

export default Footer