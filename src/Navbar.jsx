import React from "react"; 
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = ()=>{
    return (
        <>
        <div className="container-fluid nav_bg">{/*ye 3 div khud se bnaye */}
          <div className="row">
            <div className="col-10 mx-auto">

          

        <nav className="navbar navbar-expand-lg navbar-light bg-light">{/*navbar ko bootstrap 5 se copy kiya or usime edit kiya */}
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>{/*<a ko hta ke NavLink kiya or href ko hta ke to  */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">{/*navbar right me tha jo me-auto tha right ke liye ms-auto kiya */}
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
</div>

</div>

</div>
        
        </>
    );
};
export default Navbar;