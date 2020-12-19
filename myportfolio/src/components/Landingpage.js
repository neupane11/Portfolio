import React from 'react';
import cover from '../assets/img/ocean.jpeg'


const divStyle = {
    width: '100%',
    height: '800px',
    backgroundImage: `url(${cover})`,
    backgroundSize: 'cover'   
  };
const  Landingpage=()=> {
    return (
        
        <div className="pb-15 coverimage" style={divStyle}>
           
        </div>
    )
}
export default Landingpage;