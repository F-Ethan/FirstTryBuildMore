import React from 'react';
import stock1 from '../../photos/stockConstruction (5).jpg';
import stock2 from '../../photos/stockConstruction (10).jpg';
import stock3 from '../../photos/stockConstruction (15).jpg';
import stock4 from '../../photos/stockConstruction (16).jpg';
import './about.css'



const About = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  return (
    <div className='About container shadow-lg mt-3 p-3 mb-5 rounded'>
      <div className="row">
        <div class="card col-12 col-md-6 border-none text-white p-3 outline">
          <img src={stock1} class="card-img flex-fill" alt="..."></img>
          <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>

        <div class="card col-12 col-md-6 text-white p-3 outline">
          <img src={stock2} class="card-img flex-fill" alt="..."></img>
          <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>

        <div class="card col-12 col-md-6 border-none text-white p-3 outline">
          <img src={stock3} class="card-img flex-fill" alt="..."></img>
          <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>

        <div class="card col-12 col-md-6 border-none text-white p-3 outline">
          <img src={stock4} class="card-img flex-fill" alt="..."></img>
          <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
