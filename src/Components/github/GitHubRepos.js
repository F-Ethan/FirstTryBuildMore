import React, { useState, useEffect } from 'react';
import axios from 'axios';
import project from '../../pictures/homepage1.jpg';

const GitHubRepos = () => {
  function importAll(r) {
    let images = {};

    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }

  const images = importAll(require.context('../../photos', false, /\.jpg/));


  console.log(images)
  return (
    <div className='About container shadow-lg mt-3 p-3 mb-5 rounded'>
      <div className="row">
        {Object.keys(images).map((item, index) => {
          return (
            <div className="pitcture col-12 col-md-6">
              <img className="d-block w-100 mt-3" src={images[item]} alt="First Photo"></img>
            </div>
          )
        })}
      </div>
    </div >
  );
};

export default GitHubRepos;
