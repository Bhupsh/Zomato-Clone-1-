import React from 'react'
import './Collectionitem.css'
export const Collectionitem = ({items}) => {
    return (
        
 <div >
     <div className='collection-cover'>
     <img src={items.cover} className='collection-img cur-po'
     alt= {items.title} />
     <div className=" collection-card-title">
    {items.title}
</div>
<div className='collection-card-subtitle'>{items.places} 
</div>
     
     </div>
 </div>
    )
}
