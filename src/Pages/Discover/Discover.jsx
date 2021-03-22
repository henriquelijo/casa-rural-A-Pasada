import React from 'react';
import DiscoverCarousel from './DiscoverCarousel/DiscoverCarousel';
import './Discover.scss';
import { Element } from 'react-scroll';

export function Discover () {
    return(

        <section className="container-discover">
            <Element name='discover-scroll'>
            <h3 className="title">Descubre Ortegal</h3>
            <DiscoverCarousel></DiscoverCarousel>
            <article className="container-discover__article">
            <strong className="container-discover__article-strong">Al norte del norte</strong>
                <p className="container-discover__article-text">
                    La comarca de Ortegal es el escenario de un punto de encuentro
                    entre el océano Atlántico y el Mar Cantábrico. Está compuesta por
                    los concellos de Mañón, Ortigueira, Cedeira, Cerdido y Cariño. Debido 
                    a su relativo aislamiento, conserva unos paisajes naturales mágicos,
                    labrados durante siglos por la fuerza del mar y del viento. 
                    Ejemplo de lo dicho son los acantilados de Loiba, la Ría de Ortigueira 
                    Cabo Ortegal o Estaca de Bares. 
                </p>
                <p>
                    Pero además, los pueblos y aldeas de la comarca celebran todos los años
                    fechas señaladas como el certamen de Pantín Surf, el Festival Celta de 
                    Ortigueira, la Romaría de Santo André de Teixido, la fiesta del pulpo de 
                    Espasante o la fiesta del marisco de O Barqueiro; gastronomía, deporte, 
                    paisaje, música y tradición son la mejor presentación de una comarca que 
                    deja en el viajero una impronta inolvidable.
                </p>
            </article>
            </Element>
        </section>
    )
}