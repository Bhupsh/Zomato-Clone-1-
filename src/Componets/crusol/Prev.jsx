import React from 'react'

export const Prev = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
      className={className}
      style={{ ...style, background:'white',borderRadius:'50%',justifyContent:'center',alignItems:'center',padding:'4px',display:'flex' }}
      onClick={onClick}
    ></div>
    );
}
