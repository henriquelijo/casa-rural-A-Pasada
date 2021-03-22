import React from 'react';
import BootstrapCarousel from './BootstrapCarousel/BootstrapCarousel';
import './HousePage.scss';


export function HousePage () {
    return (
        <section className="housecontainer">

          <div className="housecontainer-ourhistory"> 
            <h2 className="housecontainer-ourhistory__title">
                Nuestra historia
            </h2>
            <div className="housecontainer-ourhistory__textimg">
              <div className="housecontainer-ourhistory__textimg__story">
                <p className="housecontainer-ourhistory__textimg__story-1">
                Rodeada de frutales, y en el corazón del tranquilo valle de San Román de Montoxo, a cuatro kilómetros 
                del municipio coruñés de Cedeira, la rehabilitación de 
                Casa A Pasada en 2006 supuso la recuperación de la antigua escuela de la aldea </p>

               
                {/* <div className="housecontainer-ourhistory__textimg__story">
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
                 */}
              </div>
              <BootstrapCarousel /> 
              <div className="imgContainer1"></div>
              <div className="housecontainer-ourhistory__textimg__story">
               
                  <p className="housecontainer-ourhistory__textimg__story-1">
                  Construida en el siglo XIX, la casa conserva la fachada original 
                  de piedra en las caras oeste, norte y este, pero 
                  también el estilo indiano adoptado por los antiguos propietarios a principios del siglo XX.
                  Un retiro rural que apuesta por un nuevo concepto de turismo sostenible y respetuoso con el valor de nuestra historia.
                  </p>
              </div>
              <div className="imgContainer"></div>

            </div>
          </div>
          
        </section>
        )
}

export default HousePage;