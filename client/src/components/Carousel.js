import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import image1 from '../assets/carousel1.png';
import image2 from '../assets/carousel2.png';
import image3 from '../assets/carousel3.png';

function CarouselComponent() {
    const image=[image1,image2,image3];
    
    return (
        <div className='container'>
            <Carousel className='carousel-container' >
                <Carousel.Item>
                    <img
                        className="d-block w-60 carousel-image"
                        src={image[0]}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 class='carousel-text'>First slide label</h3>
                        <p class='carousel-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-60"

                        src={image[1]}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 class='carousel-text'>Second slide label</h3>
                        <p class='carousel-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-60"
                        src={image[2]}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 class='carousel-text'>Third slide label</h3>
                        <p class='carousel-text'>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselComponent;