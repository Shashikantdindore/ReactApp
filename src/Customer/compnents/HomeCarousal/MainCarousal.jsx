import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Data } from './Data';


const items = Data.map((item) => <img className='corsor-pointer' style={{height : 450 , width : 1900}}  role='presentation' src={item.image} alt='' />)
    


const MainCarousal = () => (
    <AliceCarousel
        autoPlay
        autoPlayInterval={2000}
        animationDuration={1000}
        infinite
        touchTracking={false}
     
        disableButtonsControls
        items={items}
    />
);

export default MainCarousal