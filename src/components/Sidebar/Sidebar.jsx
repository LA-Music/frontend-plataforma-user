import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { logout } from "../../services/auth"
import { getEmail } from "../../services/auth"
import { renderNav } from './action'
import logo from "../../assets/img/logo.png";


const Sidebar = (props) => {
  // var ps;
 

  let initalToggle = {nav: '', subNav: ''}
  const [ toggle, setToggle ] = useState(initalToggle)
  const sidebar = useRef()

  useEffect(() => {
    let paths = props.routes.filter(routes => routes.path === props.location.pathname)

    paths.length > 0 && setToggle({nav: paths[0].sonOf || '', subNav: paths[0].path}) 

       if (navigator.platform.indexOf("Win") > -1) {
         new PerfectScrollbar(sidebar.current, {
            suppressScrollX: true,
            suppressScrollY: false
          });
        }
    
  },[]) //eslint-disable-line


 function handleClick(){
    logout()
  }

  function handleToggle(path) {
    console.log(path)
    setToggle({...toggle, nav: toggle.nav === path ? '' : path})
  }
  
    
    return (
      <div
        className="sidebar"
        data-color={props.bgColor}
        data-active-color={props.activeColor}
      >
        <div className="logo">
          <a
            href="https://lamusic.com.br/"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>
          <a
            href="https://lamusic.com.br/"
            className="simple-text logo-normal"
          >
            {getEmail()}
          </a>
        </div>
        <div className="sidebar-wrapper" ref={sidebar} style={{overflowX:"hidden"}}>
          <Nav>
            {props.routes.map((prop, key) => 
              renderNav(prop, key, props, handleToggle, toggle)
              // return (
              //   <li
              //     className={ this.activeRoute(prop.path) + (prop.pro ? " active-pro" : "")}
              //     key={key} >
              //     <NavLink
              //       to={prop.path}
              //       className="nav-link"
              //       activeClassName="active">
              //       <i className={prop.icon} />
              //       <p>{prop.name}</p>
              //     </NavLink>
              //   </li>
              // );
            )}
            <li>
              <NavLink
                onClick={handleClick.bind(this)}
                to="/"
              >
                <i className="nc-icon nc-simple-remove" />
                <p>Logout</p>
              </NavLink>
            </li>
          </Nav>
        </div>
      </div>
    )
}

export default Sidebar;
