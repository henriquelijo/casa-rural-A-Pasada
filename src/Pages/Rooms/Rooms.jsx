import React from 'react';
import './Rooms.scss';


export function Rooms () {  
 

    return (  
            <div className="container-ourrooms">  

            <h2 className="container-ourrooms__title">
                Habitaciones
            </h2>  
            <div className="container-ourrooms__text">
               
               <p className="container-ourrooms__text-1">
               Casa A Pasada dispone de cinco amplias habitaciones dobles
                (convertibles en triples o cuadruples),
                con baño completo y televisión. 

               Cada una de ellas lleva el nombre de lugares de la zona 
               (Cedeira, Ortigueira, Cariño y Cabo Ortegal) y el del antiguo
                uso de la casa (‘Escola das Nenas’).
               </p>
            
           </div>
           
           <div className="imgContainer2"></div>
           <div className="container-ourrooms__prizes">
               
               
            <h3 className="container-ourrooms__prizes-title">
                Tarifas
            </h3>
            <p className="container-ourrooms__prizes-strong">
                Habitación doble con desayuno (IVA Incluido):</p>
            <div className="container-ourrooms__prizes-text">
            <p>Temporada baja: 60eur.</p>
            <p>Temporada alta: 80 eur.</p>
            <p>Casa Completa:300 eur.</p>
            </div>
              
           </div>
            </div>  
    )  



}  

export default Rooms; 