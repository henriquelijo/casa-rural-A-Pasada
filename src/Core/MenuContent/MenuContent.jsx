import React from 'react';
import './MenuContent.scss';
import { Link } from 'react-scroll';

export function MenuContent () {

    return (
       
        <div className="fadein">
            
            <ul className="box">
                <li>
                    <a href="#">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                <Link smooth={true} to="rooms-scroll">
                    Habitaciones</Link>
                        
                </li>
                <li> 
                    <Link smooth={true} to='discover-scroll'>
                    Descubre Ortegal
                    </Link>
                </li>
                <li>
                    <Link smooth={true} to='contact-scroll'>
                        Contacto
                    </Link>
                </li>
            </ul>
            
        </div>
       
    )
}
export default MenuContent;