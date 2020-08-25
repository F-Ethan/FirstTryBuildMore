import React from 'react';

const ContactForm = () => {

  return (
    <div className='About container shadow-lg p-3 mb-5 mt-3 rounded col-10 col-md-7'>
      <div className='card justify-content-center'>
        <div className='container text-center '>
          <h2> Contact Me  </h2>
          <div className='row mb-3 justify-content-center'>
            <div className="col-12 mt-3">
              <div className="card" >
                <div className="card-header">
                  Email
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-action">Fethanerrier@gmail.com</li>
                  <li className="list-group-item list-group-item-action">Fethanerrier@aol.com</li>
                </ul>
              </div>
            </div>
            <div className="col-12 mt-3">
              <div className="card" >
                <div className="card-header">
                  Phone:
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-action">Cell: (503) 983-3730</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ContactForm;