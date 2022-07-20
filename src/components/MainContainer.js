import React, { useState } from 'react';
import NavBarz from './Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';

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

    <div>
      <NavBarz currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>

    // <div>
    //   <h1> Test TEst TEst!</h1>
    //   <h2> Test TEst TEst!</h2>
    //   <h3> Test TEst TEst!</h3>
    // </div>

  );

}