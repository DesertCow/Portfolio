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
              <a href="https://desertcow.github.io/DinnerWithSchmucks" className="d-flex flex-row justify-content-center align-items-center mb-5 mt-3 p-5">
                <img className="AppGIF AppGIF1 img-fluid" src="https://github.com/DesertCow/DinnerWithSchmucks/blob/main/assets/images/DinnerWithSchmucks_Demo.gif?raw=true" alt="Dinner For Schmucks Demo GIF"></img>
              </a>
            </div>
            <div className="AppBox mt-5 flex-row mt-3 p-3 justify-content-evenly">
              <h2 className="flex-row text-center">Wx Dashboard </h2>
              <a href="https://desertcow.github.io/WxDashboard" className="d-flex justify-content-center align-items-center mb-5 mt-3 p-5">
                <img className="AppGIF AppGIF2 img-fluid" src="https://github.com/DesertCow/WxDashboard/raw/main/assets/devMeta/Final_Demo.gif?raw=true" alt="WX Dashboard Demo GIF"></img>
              </a>
            </div>
          </div>
          <div className="d-flex m-2 justify-content-evenly">
            <div className="d-flex row AppBox mt-5">
              <h2 className="flex-row text-center">Surf-Deck </h2>
              <a href="https://surf-deck.herokuapp.com/" className="d-flex justify-content-center align-items-center mb-5 mt-3 p-5">
                <img className="AppGIF AppGIF3 img-fluid" src="https://github.com/DesertCow/Surf-Deck/raw/main/public/img/demo1.gif" alt="Surf Deck Demo"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}