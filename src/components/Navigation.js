import React from 'react';
import '../styles/Navbarz.css';
import { Helmet } from "react-helmet";

function NavBarz({ currentPage, handlePageChange }) {

  return (
    <div className="d-flex">
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Monoton&family=Mr+Dafoe&family=Orbitron:wght@700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <ul className="nav navbar justify-content-around m-3 p-2">
        <li className="nav-item">
          <ul className="row text-center">
            <div className="row firstName m-0 p-0">Clayton</div>
            <div className="row lastName m-0 p-0">Skaggs</div>
            {/* <a
              href="#home"
              onClick={() => handlePageChange('Home')}
              //* Responding to user clicking on home link

              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
              <div className="col">
                <div className="row firstName m-0">Clayton</div>
                <div className="row lastName m-2">Skaggs</div>
              </div>
            </a> */}
          </ul>
        </li>
        <li className="nav-item navButton text-center">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            //* Responding to user clicking on home link

            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item navButton text-center">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            //* Responding to user clicking on home link

            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item navButton text-center">
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