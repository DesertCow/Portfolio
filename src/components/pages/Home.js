import React from 'react';
import '../../styles/Home.css';
import DevPhoto from '../../img/DevPhoto.jpg';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #2c4967; }'}</style>
      </Helmet>
      <div className="d-flex justify-content-center align-items-center">
        <div className="m-5">
          <img src={DevPhoto} className="devPhoto" width={612} height={816} alt="DevPhoto" />;
        </div>
        <div className="d-flex p-2 m-3">
          <div className="d-flex flex-column">
            <div>
              <h1 className="SectionTitle p-2">About Me:</h1>
            </div>
            <div className='AboutMePar'>
              <h3 className="m-2 p-2">Hello, </h3>
              <p className="m-2 p-2"> I am a Full stack web developer with a degree in Computer Engineering from Oklahoma State University and 5+ years experience
                working as a Product Development Engineer at Intel developing Xeon class processors and chipsets. Recently I earned a
                Web Development certificate from the University Of California, Irvine to leverage my existing programming skills to
                include key web development technologies like HTML, CSS, Javascript, React, and Node.
              </p>
              <p className="m-2 p-2">Working on cutting edge silicon
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
      <div className="d-flex m-4 p-3 justify-content-center align-items-center flex-row">
        <h1 className="flex-col SectionTitle">Projects/Apps:</h1>
        <div className="row">
          <div>
            <h2>Dinner With Schmucks</h2>
            <a href="https://desertcow.github.io/DinnerWithSchmucks" className="">
              <img className="AppGIF img-fluid" src="https://github.com/DesertCow/DinnerWithSchmucks/blob/main/assets/images/DinnerWithSchmucks_Demo.gif?raw=true" alt="Dinner For Schmucks Demo GIF"></img>
            </a>
          </div>
          <div>
            <h2>Wx Dashboard </h2>
            <a href="https://desertcow.github.io/WxDashboard" className="">
              <img className="AppGIF img-fluid" src="https://github.com/DesertCow/WxDashboard/raw/main/assets/devMeta/Final_Demo.gif?raw=true" alt="WX Dashboard Demo GIF"></img>
            </a>
          </div>
          <div>
            <h2 className="row">Surf-Deck </h2>
            <a href="https://surf-deck.herokuapp.com/" className="">
              <img className="AppGIF img-fluid" src="https://github.com/DesertCow/Surf-Deck/raw/main/public/img/demo1.gif" alt="Surf Deck Demo"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}