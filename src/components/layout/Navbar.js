import React from 'react'
import {NavLink,Link} from 'react-router-dom';

const Navbar = () => {
    // const navigate = useNavigate();
    // const handleSubmit=()=>{
    //     navigate('/Createpage')
    //     console.log("helo")
  return (
    
        <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
            <div className='container'>
  <a className="navbar-brand" href="#">
    React Redux User
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse " id="navbarSupportedContent" >
    <ul className="navbar-nav mr-auto">
      {/* <NavLink id="RouterNavLink"  to="/Home" className="text-white m-2"> Home </NavLink> */}
      <NavLink id="RouterNavLink"  to="/Country" className="text-white m-2">  Countries </NavLink>
      <NavLink id="RouterNavLink"  to="/StaHome" className="text-white m-2">  States </NavLink>
      
      <NavLink id="RouterNavLink"  to="/CityHome" className="text-white m-2">  Cities </NavLink>   
    </ul>
  </div>
  {/* <NavLink id="RouterNavLink"  to="/ Login" className="text-white m-2">  LOGIN </NavLink> */}
  </div>
</nav> )
}


export default Navbar;