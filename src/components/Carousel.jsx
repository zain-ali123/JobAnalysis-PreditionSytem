import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import Data1 from "../assets/images/Data1.avif"; // Import the image file
import Data2 from '../assets/images/Data2.jpg';
import Data3 from '../assets/images/Data3.webp';
import styled from "styled-components";

export default function CarouselFadeExample() {
  return (
    <Wrapper>
      <Carousel>
        <Carousel.Item>
          <Image src={Data1} alt="First slide" className="w-100 carousel-image" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Data2} alt="Second slide" className="w-100 carousel-image" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Data3} alt="Third slide" className="w-100 carousel-image" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
}
const Wrapper = styled.div`
.carousel-caption {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
  }
  .carousel-image {
    height: 100%; /* Set the image height to 100% */
    object-fit: cover; /* Cover the container while maintaining aspect ratio */
  }
`;

