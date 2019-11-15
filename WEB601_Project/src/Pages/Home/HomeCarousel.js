import React from 'react'
import mtarthur1 from './Images/mtarthur1.jpg';
import mtarthur2 from './Images/mtarthur2.jpg';
import mtlodestone1 from './Images/mtlodestone1.jpg';
import mtlodestone2 from './Images/mtlodestone2.jpg';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {

    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-60"
                        src={mtarthur1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-60"
                        src={mtarthur2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-60"
                        src={mtlodestone1}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-60"
                        src={mtlodestone2}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    )

}

export default HomeCarousel;