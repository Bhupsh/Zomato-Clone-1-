import React from 'react'
import { nightLife } from '../../data/nightLife';
import { Exploresection } from '../Exploresections/Exploresection';
import { Filter } from '../Filter/Filter'
import { NightLifeCollection } from './NightLifeCollection';


const restorentsList = nightLife;
const dilveryFilter =[
    {
        id:1,
        title:'Filters',      
    },
    {
        id:2,
        title:" Rating: 4+",
    },
    {
        id:3,
        title:" Pure Veg.",
    },
    {
        id:4,
        title:" Safe & Hyginc",
    },
    {
        id:5,
        title:"Delivery-Time",
    },
    {
        id:6,
        title:"Great Offers",
    },
];

export const Nightlife = () => {
    return (
        <div className='max-width'>
           <NightLifeCollection />
           <Filter  filterList={dilveryFilter} />
           <Exploresection list ={restorentsList} collectionName="NightLife In Banglore" />
        </div>
    )
}
