import React from 'react';
import Ethan1 from '../../pictures/Ethan1.jpg';
import Ethan from '../../pictures/Ethan.png';
import Ethan2 from '../../pictures/Ethan2.jpg';
import Ethan3 from '../../pictures/Ethan3.jpg';
import about2 from '../../pictures/about2.jpg'

const About = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  return (
    <div className='About container shadow-lg mt-3 p-3 mb-5 rounded'>
      <div className="pitcture">
        <img class="d-block w-100" src={about2} alt="First slide"></img>
        <div className="d-none col-9 d-lg-block centered bg-clear p-3">
          <div class="h2"> My Start in the world of Tech</div>
          <div className="h5 line-height">
            When I was in high school I saw a promotional video with Mark Zuckerberg and a few other big names in the tech world.
            The video talked about how there were not enough software engineers in the world. ot went on to say that in the future
            programmers would seem to have super powers but there was a lack of talented people going into the field. So to help
            they had started a free online application to help people learn how to coe. It was CodeAcadamy.com. After watching
            that video I spent the next six months spending any free time I could working on my JavaScript and PHP. After that I
            learned anytime I could find the time. However I always felt like I was just playing around with some code.
            It seemed impossible that someday I would make a career out of this. But when I got a chance to go to Bethel Tech I
            jumped at the opportunity. Now I am designing and building full scale web applications from the ground up.
          </div>
        </div>
      </div>
      <div className='d-lg-none card text-center m-3 shadow p-3 mb-5 rounded '>
        <div className="card-header h3 mb-2">My Start in the world of Tech</div>
        <div className="h4 line-height">
          When I was in high school I saw a promotional video with Mark Zuckerberg and a few other big names in the tech world.
          The video talked about how there were not enough software engineers in the world. ot went on to say that in the future
          programmers would seem to have super powers but there was a lack of talented people going into the field. So to help
          they had started a free online application to help people learn how to coe. It was CodeAcadamy.com. After watching
          that video I spent the next six months spending any free time I could working on my JavaScript and PHP. After that I
          learned anytime I could find the time. However I always felt like I was just playing around with some code.
          It seemed impossible that someday I would make a career out of this. But when I got a chance to go to Bethel Tech I
          jumped at the opportunity. Now I am designing and building full scale web applications from the ground up.
          </div>
      </div>

      <div className='card justify-content-center mt-3'>
        <div className='card'>
          <div className='container text-center '>
            <h2> Programing Languages and Frameworks  </h2>
            <div className='row mb-3 justify-content-center'>
              <div className="col-12 col-md-6 mt-3">
                <div className="card" >
                  <div className="card-header">
                    Python
                </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action">Django</li>
                    <li className="list-group-item list-group-item-action">Flask</li>
                    <li className="list-group-item list-group-item-action">Beautiful Soup</li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 mt-3">
                <div className="card" >
                  <div className="card-header">
                    Backend JavaScript
                </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action">Express</li>
                    <li className="list-group-item list-group-item-action">Node</li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-md-6 mt-3">
                <div className="card " >
                  <div className="card-header">
                    Frontend JavaScript
                </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action">React</li>
                    <li className="list-group-item list-group-item-action">Angular</li>
                    <li className="list-group-item list-group-item-action">Ionic</li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 mt-3">
                <div className="card " >
                  <div className="card-header">
                    DataBase
                </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action">Sql</li>
                    <li className="list-group-item list-group-item-action">NoSql</li>
                    <li className="list-group-item list-group-item-action">MangoDB</li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 mt-3">
                <div className="card " >
                  <div className="card-header">
                    Other
                </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action">Html</li>
                    <li className="list-group-item list-group-item-action">Css</li>
                    <li className="list-group-item list-group-item-action">Sass</li>
                    <li className="list-group-item list-group-item-action">Bootstrap</li>
                    <li className="list-group-item list-group-item-action">Amazon Web Services</li>
                  </ul>
                </div>
              </div>


            </div>
          </div>
          <div className='text-center'>
            <h2> Me And My Wife </h2>
          </div>
          <div className='row'>
            <div className='col-md-7'>
              <div className='thumbnail'>
                <img
                  width='220'
                  height='200'
                  src={Ethan1}
                  alt='Ethan1'
                  className='mx-auto d-block'
                />
                <div className='caption'>
                  <p className='text-center'>  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='thumbnail'>
                <img
                  width='220'
                  height='200'
                  src={Ethan2}
                  alt='Ethan2'
                  className='mx-auto d-block'
                />
                <div className='caption'>
                  <p className='text-center'></p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-7'>
              <div className='thumbnail'>
                <img
                  width='210'
                  height='200'
                  src={Ethan}
                  alt='Ethan'
                  className='mx-auto d-block'
                />
                <div className='caption'>
                  <p className='text-center'> </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='thumbnail'>
                <img
                  width='220'
                  height='200'
                  src={Ethan3}
                  alt='Ethan3'
                  className='mx-auto d-block'
                />
                <div className='caption'>
                  <p className='text-center'></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
