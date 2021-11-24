import React from 'react'
import './Card.css'
export const Card = ({elements}) => {

const name=elements?.info?.name?? "";
const cover_img = elements?.info?.image?.url;
const Deliverytime = elements?.order?.deliveryTime;
const rating = elements?.info?.rating?.rating_text;
const approxprice = elements?.info?.cfo?.text;
const offers = elements?.bulkOffers??[];
const cuisines = elements?.info?.cuisine?.map((items)=>items.name).slice(0,3);
const bottomContainers = elements?.bottomContainers;
const goldOff = elements?.gold?.text;
const proOff = offers.length>1?offers[0].text:null;
const discount = offers.length>1?offers[1].text:offers.length===1?offers[0].text:null;



    return (
        <div className='explore-card cur-po'>
           <div className='exlore-card-cover'>
            <img src={cover_img}
                className='explore-card-img'
            />
            <div className='delivery-time'>{Deliverytime}</div>
            {proOff&&<div className='pro-off'>{proOff}</div>}
            {goldOff&&<div className='gold-off abs-center'>{goldOff}</div>}
            {discount&&<div className='disscount abs-center'>{discount}</div>}
           </div>
           <div className='res-row'>
                <div className='res-name'>{name}</div>
                {rating&&<div className='res-rating abs-center'>{rating}</div>}
           </div>
           <div className='res-row'>
                {cuisines.length&&<div className='res-cuisine'>{cuisines.map((item,i)=>{
                     return <span className='res-cuisine-tag'>{item}{i!==cuisines.length-1&&","}</span>
                })}
                </div>}
                {approxprice&&<div className='res-price'>{approxprice}</div>}
           </div>
            {bottomContainers.length>0&&<div>
                <div className='card-separator'></div>
                <div className='explore-bottom'>
                    <img
                        src={bottomContainers[0]?.image?.url} alt={bottomContainers[0]?.text}
                        style={{height:"18px"}}
                    />
                    <div className='res-bottom-text'>{bottomContainers[0]?.text}</div>
                </div>
            </div>}
        </div>
    )
}

