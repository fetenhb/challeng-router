import React from 'react'
import {Carousel} from 'react-bootstrap';

const Crousell = () => {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://lh3.googleusercontent.com/proxy/_N7xWJlL5MFq_2f2eSGmPSJZUFtHrUg0SgrOMj5Z7JgvkdXSgPr_aD_TnVPYkNUFh4hqg8biENhJOs0BD9yClf647cW7VAmw79pF9pHg2d_Isp_zApLD-ocsjdM"
      alt="First slide"
      height="600px"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.slate.fr/sites/default/files/styles/1060x523/public/lukasz-szmigiel-jfcviyfycus-unsplash.jpg"
      alt="Second slide"
      height="600px"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://famillesaine.com/wpcms/wp-content/uploads/2018/04/nature-1920x960.jpg"
      alt="Third slide"
      height="600px"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Crousell
