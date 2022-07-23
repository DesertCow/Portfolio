import React from 'react';
import '../../styles/Home.css';
import DevPhoto from '../../img/DevPhoto.jpg';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div className="d-flex row justify-content-center m-3 p-3">
      <Helmet>
        <style>{'body { background-color: #2c4967; }'}</style>
      </Helmet>
      <div className="d-flex justify-content-center align-items-center aboutMe flex-row">
        <div className="d-flex p-2 m-3 aboutMeSection">
          <div className="m-5 flex-row">
            <img src={DevPhoto} className="devPhoto" width={306} height={408} alt="DevPhoto" />;
          </div>
          <div className="row">
            <div>
              <h1 className="SectionTitle p-2 flex-row">About Me:</h1>
            </div>
            <div className='aboutMeSection d-flex flex-col justify-content-center'>
              <div className="aboutMePar">
                <h3 className="m-2 p-2 flex-row">Hello, </h3>
                <p className="m-2 p-4 flex-row"> I am a Full stack web developer with a degree in Computer Engineering from Oklahoma State University and 5+ years experience
                  working as a Product Development Engineer at Intel developing Xeon class processors and chipsets. Recently I earned a
                  Web Development certificate from the University Of California, Irvine to leverage my existing programming skills to
                  include key web development technologies like HTML, CSS, Javascript, React, and Node.
                </p>
              </div>
              <p className="m-2 p-4 aboutMePar flex-row">Working on cutting edge silicon
                technology required extensive technical problem solving to balance yield, coverage, and time constraints to meet
                requirements and release whitepaper validated code to production while utilizing Agile scrum methodology. I have also
                previously held AWS certifications and am passionate about continuously learning new skills and technologies or expanding
                the depth of my knowledge with existing skills and technologies. I look forward to capitalizing on my years of experience
                in the silicon industry in combination with my recently acquired web development skills to quickly spin up and add value
                to any software development team.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex m-4 p-3 justify-content-center align-items-center appZone flex-row">
        <div className="row d-flex px-5">
          <h1 className="flex-col SectionTitle">Projects/Apps:</h1>
          <div className="d-flex m-2 justify-content-evenly">
            <div className="d-flex row AppBox mt-5">
              <h2 className="flex-row text-center mt-3 p-3">Dinner With Schmucks</h2>
              <a className="text-center" href="https://github.com/DesertCow/DinnerWithSchmucks">
                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="grey" className="bi bi-github footerIcon" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a href="https://desertcow.github.io/DinnerWithSchmucks" className="d-flex flex-row justify-content-center align-items-center mb-5 mt-3 p-3">
                <img className="AppGIF AppGIF1 img-fluid" src="https://github.com/DesertCow/DinnerWithSchmucks/blob/main/assets/images/DinnerWithSchmucks_Demo.gif?raw=true" alt="Dinner For Schmucks Demo GIF"></img>
              </a>
            </div>
            <div className="d-flex row AppBox mt-5">
              <h2 className="flex-row text-center mt-3">Wx Dashboard </h2>
              <a className="text-center mt-3 mb-0" href="https://github.com/DesertCow/WxDashboard">
                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="grey" className="bi bi-github footerIcon" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a href="https://desertcow.github.io/WxDashboard" className="d-flex justify-content-center align-items-center mb-5 mt-3 p-3">
                <img className="AppGIF AppGIF2 img-fluid" src="https://github.com/DesertCow/WxDashboard/raw/main/assets/devMeta/Final_Demo.gif?raw=true" alt="WX Dashboard Demo GIF"></img>
              </a>
            </div>
          </div>
          <div className="d-flex m-2 justify-content-evenly">
            <div className="d-flex row AppBox mt-5">
              <h2 className="flex-row text-center mt-3">Surf-Deck </h2>
              <a className="text-center mt-3" href="https://github.com/DesertCow/Surf-Deck">
                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="grey" className="bi bi-github footerIcon" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a href="https://surf-deck.herokuapp.com/" className="d-flex justify-content-center align-items-center mb-5 mt-3 p-3">
                <img className="AppGIF AppGIF3 img-fluid" src="https://github.com/DesertCow/Surf-Deck/raw/main/public/img/demo1.gif" alt="Surf Deck Demo"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}