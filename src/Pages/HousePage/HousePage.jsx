import React from 'react';
import BootstrapCarousel from './BootstrapCarousel/BootstrapCarousel';
import './HousePage.scss';


export function HousePage () {
    return (
        <section className="housecontainer">
         
          <h2 className="housecontainer-title">Conócenos</h2>
         
            
          <BootstrapCarousel /> 

          <div className="housecontainer-ourhistory"> 
            <h2 className="housecontainer-ourhistory__title">
                Nuestra historia
            </h2>
            <div className="housecontainer-ourhistory__textimg">
              <div className="housecontainer-ourhistory__textimg__story">
                <p className="housecontainer-ourhistory__textimg__story-1">
                Situada en San Román de Montoxo, a cuatro kilómetros 
                del municipio coruñés de Cedeira, la rehabilitación de 
                Casa A Pasada en 2006 supuso la recuperación de un 
                edificio singular y querido para la aldea de la Pasada.</p>
                <div className="housecontainer-ourhistory__textimg__story">
                  <figure className="housecontainer-ourhistory__textimg__story-img0">
                    
                  </figure>
                </div>
                
                <p className="housecontainer-ourhistory__textimg__story-1">
                Antes que Casa de Turismo Rural, A Pasada albergó la 
                Escola das Nenas (Escuela de las Niñas) y fue 
                sucesivamente taberna, tienda, local social... 
                Según algunos cronistas, el nombre de A Pasada 
                resume además su finalidad inicial: lugar de paso y 
                posada para aquellos que seguían la ruta hacia 
                San Andrés de Teixido.
                </p>
                
              </div>
              <div className="housecontainer-ourhistory__textimg__story">
                <div className="housecontainer-ourhistory__textimg__story-img">
                    <figure className="housecontainer-ourhistory__textimg__story-img1">
                      
                    </figure>
                </div> 
                  <p className="housecontainer-ourhistory__textimg__story-1">
                  En la rehabilitación, hemos querido respetar la propia
                  historia de la casa, construida en el siglo XIX.</p>
                  <div className="housecontainer-ourhistory__textimg__story-img">
                     <figure className="housecontainer-ourhistory__textimg__story-img2">
                      
                     </figure>
                  </div>
                  <p className="housecontainer-ourhistory__textimg__story-1">
                  De ahí que optamos por recuperar la fachada original 
                  de piedra en las caras oeste, norte y este, pero 
                  también apostamos por dejar constancia de la huella 
                  histórica que este siglo y medio ha dejado en el 
                  edificio: anteriores propietarios quisieron emular, 
                  entrado ya el siglo XX, el estilo indiano, ajustando 
                  en lo posible la fachada sur a la arquitectura de 
                  aquella época.
                  </p>
              </div>
              <figure className="bigImg">

              </figure>

            </div>
          </div>
          
        </section>
        )
}

export default HousePage;