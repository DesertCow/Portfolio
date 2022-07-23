import React, { useState } from 'react';
import NavBarz from './Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import '../styles/MainContainer.css';

export default function PortfolioContainer() {

  const [currentPage, setCurrentPage] = useState('Home');


  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Home />;
  };



  const handlePageChange = (page) => setCurrentPage(page);

  return (

    <div className="main">
      <NavBarz currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>

  );

}