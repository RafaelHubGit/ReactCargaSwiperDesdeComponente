import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-sm fixed-top navbar-light">
        <div className="container">
            <NavLink className="navbar-brand" to="#">Prendi2</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar1">
                {/* <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-NavLink" to="#">NavLink</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-NavLink" to="#">NavLink</NavLink>
                    </li>
                </ul> */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" 
                                 activeClassName="active" 
                                 to="./Home">
                            Inicio
                        </NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" 
                                 activeClassName="active" 
                                 to="./prueba">
                            NavLink
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
 
export default Header;