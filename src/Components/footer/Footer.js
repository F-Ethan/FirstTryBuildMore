import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import './footer.css';

const Footer = () => {
  const token = JSON.parse(localStorage.getItem('jwtToken'))
    ? JSON.parse(localStorage.getItem('jwtToken')).token
    : false;

  return (
    <footer className='footer navbar-fixed-bottomm p-3'>
      <div className='container'>
        <div className='row'>
          {/* column 1 */}
          <div className='col-md-4 col-sm-6'>
            <h4> Contact Info </h4>
            <ul className='list-unstyled'>
              <li> Ethan Ferrier </li>
              <li> Cottonwood, CA</li>
              <li> 530-983-3730</li>
              <li> Fethanerrier@gmail.com </li>
            </ul>
          </div>
          {/* column 2 */}
          <div className='col-md-4 col-sm-6'>
            <h4> My Social Media </h4>
            <ul className='list-unstyled'>
              {/* Warning: Each child in a list should have a unique "key" prop. */}
              {/*Warning: Failed prop type: The prop `to` is marked as required in `Link`, but its value is `undefined`.  */}
              <a
                href='https://www.facebook.com/ethan.ferrier'
                className='facebook social'
                target='_blank'
              >
                <FontAwesomeIcon icon={faFacebook} size='2x' />{' '}
              </a>

              <a
                href='https://twitter.com/EthanFerrier'
                className='twitter social'
                target='_blank'
              >
                <FontAwesomeIcon icon={faTwitter} size='2x' />{' '}
              </a>

              <a
                href='https://www.instagram.com/fethanerrier/?hl=en'
                className='instagram social'
                target='_blank'
              >
                <FontAwesomeIcon icon={faInstagram} size='2x' />{' '}
              </a>
            </ul>
          </div>
          {/* column 2 */}
          <div className='col-md-4 col-sm-6'>
            <h4> Pages </h4>
            <ul className='list-unstyled'>
              <li>
                <Link to='/' className='text-reset '>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/About' className='text-reset '>
                  About
                </Link>
              </li>
              <li>
                <Link to='/GitHubRepos' className='text-reset '>
                  My Projects
                </Link>
              </li>
              <li>
                <Link to='/ContactForm' className='text-reset '>
                  Contact
                </Link>
              </li>
              <li>
                <Link to='/Resume' className='text-reset '>
                  Résumé
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
