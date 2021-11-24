import React from 'react'
import { Filteritems } from './Filteritems';
import './filters.css'


export const Filter = ({filterList}) => {
    return (
        <div className ="filters">
            {filterList&&filterList.map((filter)=>{
                return(
                    <Filteritems filter={filter} key={filter.id}/>
                );
            })}
        </div>
    )
}
