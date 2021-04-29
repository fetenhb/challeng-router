import React from 'react'
import {Carousel} from 'react-bootstrap';

const Crousell = () => {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://famillesaine.com/wpcms/wp-content/uploads/2018/04/nature-1920x960.jpg"
      alt="First slide"
      height="800px"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.slate.fr/sites/default/files/styles/1060x523/public/lukasz-szmigiel-jfcviyfycus-unsplash.jpg"
      alt="Second slide"
      height="800px"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.maisonbionat.fr/wp-content/uploads/2020/06/maison-nature-scaled.jpg"
      alt="Third slide"
      height="800px"
    />

  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Crousell
