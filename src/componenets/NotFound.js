// import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (  
        <div>
            <h1>Sorry</h1>
            <Link to="/">The Page Cannot be found </Link>
        </div>
    );
}
 
export default NotFound;