import React from 'react';
import DiscoverCarousel from './DiscoverCarousel/DiscoverCarousel';
import './Discover.scss';

export function Discover () {
    return(

        <section className="container-discover">
            <h3 className="title">Descubre Ortegal</h3>
            <DiscoverCarousel></DiscoverCarousel>
            {/* <div className="container-discover">
                <h4>Fechas señaladas</h4>
                <div className="container-discover-text">
                    <div className="container-discover-text-1">
                        <figure className="container-discover-img1">

                        </figure>
                        <p className="container-discover-text1 "></p>
                    </div>
                    <div className="container-discover-text-2">
                        <p className="container-discover-text2"></p>
                        <figure className="container-discover-img2">

                        </figure>
                    </div>
                    <div className="container-discover-text-3">
                        <figure className="container-discover-img3">

                        </figure>
                        <p className="container-discover-text3"></p>
                    </div>

                </div>
            </div> */}
        </section>
    )
}