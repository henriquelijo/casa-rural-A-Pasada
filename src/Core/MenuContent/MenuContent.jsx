import React from 'react';
import FadeIn from 'react-fade-in';
import './MenuContent.scss';

export function MenuContent () {

    return (
       
        <div className="fadein">
            
            <ul className="box">
                
                <li >
                    <a  href="#">
                        Habitaciones
                    </a>
                </li>
                <li> 
                    <a href="#">
                    Descubre Ortegal
                    </a>
                </li>
                <li>
                    <a href="#">
                        Contacto
                    </a>
                </li>
            </ul>
            
        </div>
       
    )
}
export default MenuContent;