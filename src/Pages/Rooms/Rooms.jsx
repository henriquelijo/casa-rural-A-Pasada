import React from 'react';
import './Rooms.scss';
import room1 from '../../assets/img/habitaciones/room1.jpg';


export function Rooms () {  
 

    return (  
            <div>  

            <h2 className="housecontainer-ourhistory__title rooms-title">
                Habitaciones
            </h2>  
                <div className="housecontainer-ourhistory__textimg__story">
               
               <p className="housecontainer-ourhistory__textimg__story-1">
               Casa A Pasada dispone de cinco amplias habitaciones dobles (convertibles en triples o cuadruples), con baño completo y televisión. 

               Cada una de ellas lleva el nombre de lugares de la zona (Cedeira, Ortigueira, Cariño y Cabo Ortegal) y el del antiguo uso de la casa (‘Escola das Nenas’).
               </p>
            
           </div>
           <div className="imgContainer2"></div>
           <div className="prizes">
               
               
            <h3 className="">
                Tarifas
            </h3>
               <p> Habitación doble con desayuno (IVA Incluido)</p>
               <p>Temporada baja: 60eur.</p>
               <p>Temporada alta: 80 eur.</p>
               <p>Casa Completa:300 eur.</p>
              
           </div>
            </div>  
    )  



}  

export default Rooms; 