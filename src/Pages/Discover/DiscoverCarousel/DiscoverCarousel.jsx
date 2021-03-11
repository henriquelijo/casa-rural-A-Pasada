import React from 'react';
import Carousel from 'react-bootstrap/Carousel'; 
import sol from '../../../assets/img/descubre/sol.png';
import penafurada from '../../../assets/img/descubre/penaFurada.png';
import santoandre from '../../../assets/img/descubre/SantoAndre.png'; 
import './DiscoverCarousel.scss';

  
export function DiscoverCarousel () {  
 

                return (  

                        <div>  

                         <div class='container-fluid' >  

                          <div className="row title" style={{ marginBottom: "20px" }} >    

                         </div>  

                         </div>  

                         <div className='container-fluid' >  

                        <Carousel interval={2000} keyboard={false} pauseOnHover={true}>  

                        <Carousel.Item >  
                        <figure className="slideFrame">
                        <img   

                         className="d-block w-100"  

                        src={penafurada}  alt="#"/> 
                        </figure> 

                           <Carousel.Caption>  

                             <h3>Pena Furada</h3>  

                                 </Carousel.Caption>  

                                 </Carousel.Item  >  

                                 <Carousel.Item>  
                                 <figure className="slideFrame">
                                 <img  

                                   className="d-block w-100"  

                                    src={santoandre} alt="#" />
                                </figure>  

                                       <Carousel.Caption>  

                                   <h3>Santo André de Teixido</h3>  

                                      </Carousel.Caption>  

                                         </Carousel.Item>  

                                       <Carousel.Item>  
                                       <figure className="slideFrame">
                                       <img  

                                        className="d-block w-100"  

                                         src={sol} alt="#" /> 
                                      </figure> 

                                        <Carousel.Caption>  

                                          <h3>Solpor de Valdoviño</h3>  

                                          </Carousel.Caption>  

                                         </Carousel.Item>  

                                        </Carousel>  

                                </div>  

                        </div>  

                )  

          

}  

export default DiscoverCarousel; 