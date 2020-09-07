import React, { Component } from 'react';
import stock from '../../photos/stockConstruction (15).jpg';
import addition1 from '../../photos/addition1.jpg';
import addition2 from '../../photos/addition2.jpg';
import addition3 from '../../photos/addition3.jpg';
import addition4 from '../../photos/addition4.jpg';
import addition5 from '../../photos/addition5.jpg';
import addition6 from '../../photos/addition6.jpg';
import deck1 from '../../photos/deck1.jpg';
import deck2 from '../../photos/deck2.jpg';
import deck3 from '../../photos/deck3.jpg';
import deck4 from '../../photos/deck4.jpg';
import deck5 from '../../photos/deck5.jpg';
import deck6 from '../../photos/deck6.jpg';
import deck7 from '../../photos/deck7.jpg';
import deck8 from '../../photos/deck8.jpg';
import deck9 from '../../photos/deck9.jpg';
import exterer1 from '../../photos/exterer1.jpg';
import interer1 from '../../photos/interer1.jpg';
import interer2 from '../../photos/interer2.jpg';
import roof1 from '../../photos/roof1.jpg';
import roof2 from '../../photos/roof2.jpg';
import roof3 from '../../photos/roof3.jpg';
import roof4 from '../../photos/roof4.jpg';


import Card from '../Card';
import './Home.css';


const FeaturedCards = [
  {
    title: 'Additions',
    img: [addition1, addition2, addition3, addition4, addition5, addition6],
    about:
      "As a Full Stack web developer I am always looking for ways to improve my abilities. From going to School at Bethel Tech, \
    to watch tutorials on YouTube. Every year My abilities grow and my ambition grows right along with it.",
    blogId: 'addition',
    blogIdHref: '#addition',
  },
  {
    title: 'decks',
    img: [deck1, deck2, deck3, deck4, deck5, deck6, deck7, deck8, deck9],
    about:
      "As a student at Bethel Tech, I am learning how to bring a Project from the design phase all the way through development \
      and into production. I am learning about AWS, NodeJS, Angular, React, Express and much much more. ",
    blogId: 'deck',
    blogIdHref: '#deck',
  },
];

const Cards = [
  {
    title: 'Exterer',
    img: [exterer1],
    about:
      "In January 2019, I took 'Harvard's CS50 Web Programing with Python & Javascript' Online. \
      The Class took us through the basics of programming. It started in C and then worked its way into \
      JavaScript. After JavaScrip we Learned the basics of Python. Then We went into how to use a simple \
      framework like Flask and for the Final in the class we had to build a paper trading Stock market App. \
      After finishing the class I taught myself how to use Django and Beautiful Soup.",
    blogId: 'exterer',
    blogIdHref: '#exterer',
  },
  {
    title: 'Interer',
    img: [interer1, interer2],
    about:
      "Django is my favorite Framework in Python. Django is a powerful server side Framework that handles all requests.\
      I got into Django because of how powerful of a framework it was. It takes longer to set up than Flask but it makes \
      handling authentication and complexe requests almost too easy.",
    blogId: 'interer',
    blogIdHref: '#interer',
  },
  {
    title: 'Roofs',
    img: [roof1, roof2, roof3, roof4],
    about:
      "JavaScript is the first Programing Language I learned when I was still in high school. \
      I loved how simple the language was to learn and how powerful of a language it is. After Learning the \
      Basics of JavaScript I found that I loved to program, However I could not figure out how to make my \
      applications look even remotely nice. So I got discouraged. What I did not know is that I needed to learn a lot\
      more.",
    blogId: 'roof',
    blogIdHref: '#roof',
  },
  {
    title: 'React',
    img: [],
    about:
      "It was not until I was a student at Bethel Tech that I even heard of React or Angular. At the time I had already \
      Learned Python and Django but even after learning these I still could not get my front end to look the way I wanted \
      it too. However as I started to learn about react I relived that one of my problems was that what I was comparing my work to\
      was using advanced Javascript languages to control the state of their code. I was trying to make my projects look and act like\
      web applications without knowing that they were using whole frameworks I had never heard of. Now as I build complexe\
      applications using React and Angular I am quite proud of what I can do.",
    blogId: '6',
    blogIdHref: '#6',
  },
  {
    title: 'Angular',
    img: [],
    about:
      "Angular is one of the last Frameworks I learned in School. By the time we got to Angular I was Already building complex Applications \
      with both front and back ends that would dynamically load and update when anything changes. However the more I learned about Angular the more\
      I came to love the Framework. To me Angular seems fairly similar to Django, It has a very clean layout that makes it easy to organize your code. \
      It also come with so much functionality right from the start, making it easy to Authenticate your users and and handel the routing within \
      your applications",
    blogId: '7',
    blogIdHref: '#7',
  },
];



export class HomePage extends Component {
  render() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    return (
      <div className='container shadow-lg mt-3 p-3 rounded'>
        <div className="pitcture">
          <img className="d-block w-100" src={stock} alt="First slide"></img>

          {/* <div className='card text-center m-3 shadow p-3 mb-5 rounded'></div> */}
          <div className="d-none d-lg-block centered text-center bg-clear rounded">
            <div className="h2">Build More</div>
            <div className="h4 line-height">
              Welcome to our portfolio website. I am so glad you have taken the time and
              intrest to come here and learn more about us.
          </div>
          </div>
        </div>

        <div className='d-lg-none card text-center m-3 shadow p-3 mb-5 rounded '>
          <div className="card-header h3 mb-2">Build More</div>
          <div className="h4 line-height">
            Welcome to our portfolio website. I am so glad you have taken the time and
            intrest to come here and learn more about us.
          </div>
        </div>

        <Card Cards={FeaturedCards} Title='Featured' />
        <Card Cards={Cards} Title='More' />
      </div>
    );
  }
}

export default HomePage;
