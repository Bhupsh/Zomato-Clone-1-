import React from 'react'
import Slider from 'react-slick';
import { Next } from '../crusol/Next'
import { Prev } from '../crusol/Prev'
import './Collection.css'
import { Collectionitem } from './Collectionitem';

const settings = {
   
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };

export const Collection = ({collectionList}) => {
    return (

  <div className='collection-wrapper'>
  <div className='collection max-width'>
  <div className='collection-title '>Collections</div>
  <div classname='collection-subtitle-row'>
      <div>
      Explore curated lists of top restaurants, cafes, pubs, 
      and bars in Bengaluru, based on trends
      </div>
  </div>
    <Slider {...settings}>
    {collectionList.map((items)=>{
        return(
            <Collectionitem items ={items} />
        );
    })}
     </Slider>
  </div>
  </div>

    )
}
