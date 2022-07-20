import React from 'react';
import '../styles/Navbarz.css';

function NavBarz({ currentPage, handlePageChange }) {

  return (
    <div class="D-flex">
      <ul className="nav nav-tabs justify-content-center m-3">
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