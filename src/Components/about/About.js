import React from 'react';
import stock1 from '../../photos/stockConstruction (1).jpg';
import stock2 from '../../photos/stockConstruction (10).jpg';
import stock3 from '../../photos/stockConstruction (15).jpg';
import stock4 from '../../photos/stockConstruction (16).jpg';



const About = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  return (
    <div className='About container shadow-lg mt-3 p-3 mb-5 rounded'>
      <div className="row">
        <div className="col-6">
          <img className="d-block w-100 mt-3" src={stock1} alt="First slide"></img>
        </div>
        <div className="col-6">
          <img className="d-block w-100 mt-3" src={stock2} alt="First slide"></img>
        </div>
        <div className="col-6">
          <img className="d-block w-100 mt-3" src={stock3} alt="First slide"></img>
        </div>
        <div className="col-6">
          <img className="d-block w-100 mt-3" src={stock4} alt="First slide"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
