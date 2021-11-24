import React from 'react';
import './filteritems.css';

export const Filteritems = ({filter}) => {
    return (
        <div className="filteritem">
            {filter.icon&&filter.icon}
            <div className="filtername">
                {filter.title}
            </div>
        </div>
    )
}
