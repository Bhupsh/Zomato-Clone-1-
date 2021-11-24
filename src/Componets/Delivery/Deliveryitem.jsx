import React from 'react'
import './Deliveryitem.css'
export const Deliveryitem = ({item}) => {
    return (
        <div >
            <div className='deliveryitem-cover'>
            <img src={item.cover} className='foods-img cur-po' />
            </div>
            <div className=" item-name">
                {item.name}
            </div>
        </div>
    )
}
