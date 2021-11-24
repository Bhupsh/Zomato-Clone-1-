import React from 'react'
import Slider from 'react-slick';
import { Next } from '../crusol/Next';
import { Prev } from '../crusol/Prev';
import { Deliveryitem } from './Deliveryitem';

const deliveryItems=[
    {
        id:1,
        name:"Pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id:2,
        name:"Biryani",
        cover:"https://b.zmtcdn.com/data/dish_images/2a24c5264606bd78622267d28a3726821634805216.png",
    },
    {
        id:3,
        name:"Chicken",
        cover:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
    },
    {
        id:4,
        name:"Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    },
    {
        id:5,
        name:"Chaat",
        cover:"https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
    },
    {
        id:6,
        name:"Cake",
        cover:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
    },
    {
        id:7,
        name:"Rolls",
        cover:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
    },
    {
        id:8,
        name:"Fries",
        cover:"https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png",
    },
    {
        id:9,
        name:"Samosa",
        cover:"https://b.zmtcdn.com/data/o2_assets/bc0cc8557a06fcd3aacdd7b241cf9db71632716547.png",
    },
    {
        id:10,
        name:"Momos",
        cover:"https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
    },
];

const settings = {
    
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<Next />,
    prevArrow:<Prev />,
  };

export const DeliveryCollection = () => {
    return (
        <div className="delivery-collection">
           <div className="max-width">
            <h3 className="collection-title">Eat what makes you happy</h3>
            <Slider {...settings}>
                {deliveryItems.map((items)=>{
                    return(
                       <Deliveryitem item={items} />
                    );
                })}
            </Slider>
           </div>
        </div>
    );
}
