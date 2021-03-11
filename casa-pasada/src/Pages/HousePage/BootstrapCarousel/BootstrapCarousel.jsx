import React from 'react'; 
import Carousel from 'react-bootstrap/Carousel';
import './BootstrapCarousel.scss'
import open from '../../../assets/img/conocenos/open.png';
import front2 from '../../../assets/img/conocenos/front-2.png';
import front from '../../../assets/img/conocenos/front.png';


export function BootstrapCarousel () {
    return (
        <Carousel>
  <Carousel.Item>
    <div className="containerImg">
    <img
      className="d-block w-90"
      src={open}
      alt="First slide"
    />
    </div> 
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <div className="containerImg">
    <img
      className="d-block w-100"
      src={front2}
      alt="Second slide"
    />
    </div>
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <div className="containerImg">
      <img
      className="d-block w-100"
      src={front}
      alt="Third slide"
    />
    </div>

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}
export default BootstrapCarousel;