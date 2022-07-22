import React from 'react';
import '../styles/Navbarz.css';
import { Helmet } from "react-helmet";

function NavBarz({ currentPage, handlePageChange }) {

  return (
    <div className="D-flex">
      <Helmet>
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css2?family=Bowlby+One&amp;family=Kdam+Thmor+Pro&amp;display=swap" rel="stylesheet"></link>
      </Helmet>
      <ul className="nav navbar nav-tabs justify-content-space-between m-3 p-2">
        <li className="nav-item">
          <ul className="row text-center">
            <a
              href="#home"
              onClick={() => handlePageChange('Home')}
              //* Responding to user clicking on home link

              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
              <div className="col">
                <div className="row firstName m-0">Clayton</div>
                <div className="row lastName m-2">Skaggs</div>
              </div>
            </a>
          </ul>
        </li>
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            //* Responding to user clicking on home link

            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            //* Responding to user clicking on home link

            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Resume"
            onClick={() => handlePageChange('Resume')}
            //* Responding to user clicking on home link

            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>

    </div>

  );
}

export default NavBarz;