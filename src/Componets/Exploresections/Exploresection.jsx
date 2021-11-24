import React from 'react'
import { Card } from '../Card/Card';
import './Exploresection.css'
export const Exploresection = ({list,collectionName}) => {

    return (
        <div className='max-width explore-section'>
            <div className="collection-title">{collectionName}</div>
                <div className='explore-grid'>
                    {list.map((item)=>{
                        return(<Card elements={item}/>);
                    })}
                </div>
            
        </div>
    )
}
