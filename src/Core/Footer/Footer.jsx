import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';


export function Footer () {
    return(
        <footer className="container-footer">
            <div className="row">
                <div className="col">
                    <NavLink ClassName="link--active" exact activeClassName="footer__link--active" to={"/datausage"}>
                        Política de protección de datos
                    </NavLink>
                    <div className="row">
                
                <div className="col-2">
                    <a href="https://www.instagram.com/casaapasada/">
                <i class="fab fa-instagram"></i>
                </a>    
                </div>
                <div className="col-2">
                    <a href="https://www.facebook.com/A.PasadaTurismoRural">
                    <i class="fab fa-facebook-square"></i> 
                    </a>  
                </div>
                </div>
                </div>
                
                <div className="col">
                    <div className="col img-logo"></div>
                    <div className="col">
                        <h4>Contacto</h4>
                        <p>tlfn: </p>
                        <p>Dirección</p>
                        <p>email: </p>
                    </div>

                </div>
            </div>
            
        </footer>
    )
}
export default Footer;