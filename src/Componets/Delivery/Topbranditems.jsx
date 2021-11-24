import React from 'react'
import './topbranditems.css'
export const Topbranditems = ({restros}) => {
    return (
        <div>
            <div className='topbrands-cover'>
                <img className='brand-img'
                  src={restros.cover}
                 />
            </div>
            <div className='brand-time'>
            {restros.time}
            </div>
        </div>
    )
}
