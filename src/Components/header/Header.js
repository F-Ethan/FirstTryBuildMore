import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ethan from '../../pictures/Ethan.png';
import './Header.css';


class Header extends Component {
  render() {
    return (
      <div className="container">
        <nav className='navbar navbar-expand-lg shadow-lg  navbar-dark rounded '>
          {/* <img src={Ethan} width="50px" className="rounded"></img> */}
          <div className="h5 ml-3">Build More</div>
          <div className='d-flex flex-grow-1 justify-content-end'>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
          </div>

          <div
            className='collapse navbar-collapse flex-grow-1 justify-content-end text-right'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav font'>
              <li className='nav-item '>
                <Link className='nav-link text-reset' to='/'>
                  HOME
              </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-reset' to='/About'>
                  ABOUT
              </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-reset ' to='/GitHubRepos'>
                  PROJECTS
              </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-reset ' to='/ContactForm'>
                  CONTACT
              </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-reset ' to='/Resume'>
                  RÉSUMÉ
              </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
