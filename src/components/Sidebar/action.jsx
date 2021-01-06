import React from 'react'
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";

export const renderNav = (prop, key, props, handleToggle, toggle, handleToggleSub) => {
    
   

   function activeRoute(routeName) {
        return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    return (
        !prop.sonOf &&
        <li
            onClick={() => handleToggle(prop.path)}
            className={ activeRoute(prop.path) + (prop.pro ? " active-pro" : "")}
            key={key} >
                <NavLink
                    to={prop.path}
                    className="nav-link"
                    activeClassName="active">
                    <i className={prop.icon} />
                    <p style={{position: 'relative'}}>
                        {prop.name} 
                        {props.routes.filter( route => route.sonOf === prop.path).length > 0 && (
                           props.routes.filter( route => route.sonOf === toggle.nav).length > 0 ? 
                            <b class="caret" style={{position: 'absolute', right: 0, transform: 'rotate(180deg)' }}></b> :
                            <b class="caret" style={{position: 'absolute', right: 0, }}></b>
                        )}
                    </p>
                    
                </NavLink>
                {props.routes.filter( route => route.sonOf === toggle.nav).length > 0 &&
                <Nav className={`ml-3 `}>
                    {props.routes.filter( route => route.sonOf === prop.path).map( (rout, index) =>
                        <li
                        className={ activeRoute(rout.path) +  (rout.pro ? " active-pro" : "")}
                        key={index} >
                            <NavLink
                                onClick={() => handleToggle('teste')}
                                to={rout.path}
                                className="nav-link"
                                activeClassName="active">
                                <i className={rout.icon} />
                                <p>{rout.name}</p>
                            </NavLink>
                        </li>
                    )}
                </Nav>
                    }
            </li>
    );
}