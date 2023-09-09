import React from 'react';
import "./home.css";
import Carousel from 'react-bootstrap/Carousel';

function Home() {
    return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100'
          src='https://cdn.pixabay.com/photo/2017/03/27/16/50/beach-2179624_960_720.jpg'
          alt='First slide' />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img className='d-block w-100'
             src='https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_960_720.jpg'
             alt='Second slide' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img className='d-block w-100' 
             src='https://cdn.pixabay.com/photo/2017/03/27/14/49/beach-2179183_960_720.jpg'
             alt='Third slide' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}

export default Home;