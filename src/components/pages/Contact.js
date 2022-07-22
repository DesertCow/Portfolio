import React from 'react';
import '../../styles/Contact.css';
import { Helmet } from "react-helmet";
import ContactPhoto from '../../img/IMG_1101.JPG';

export default function Contact() {
  return (
    <div className="d-flex row justify-content-center p-5">
      <Helmet>
        <style>{'body { background-color: #2c4967; }'}</style>
      </Helmet>
      <div className="m-5 row">
        <img src={ContactPhoto} className="devPhoto" width={600} height={1200} alt="ContactPhoto" />;
      </div>
      <div>
        <section className="mb-4 contactForm">
          <h2 className="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>
          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="name" name="name" className="form-control"></input>
                      <label htmlFor="name" className="pb-4">Your name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="email" name="email" className="form-control"></input>
                      <label htmlFor="email" className="pb-4">Your email</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input type="text" id="subject" name="subject" className="form-control"></input>
                      <label htmlFor="subject" className="pb-4">Subject</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">

                    <div className="md-form">
                      <textarea type="text" id="message" name="message" rows="6" className="form-control md-textarea"></textarea>
                      <label className="pb-4" htmlFor="message">Message</label>
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-center text-md-left">
                {/* document.getElementById('contact-form').submit(); */}
                {/* <a className="btn btn-primary" onClick="">Send</a> */}
              </div>
              <div className="status"></div>
            </div>
            <div className="col-md-3 text-center">
              <ul className="d-flex row list-unstyled mb-0">
                <div className="d-flex row justify-content-center locationEmail m-3 p-3 align-items-center">
                  <li className="d-flex row"><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p className="p-2 pb-0">Newport Beach, CA </p>
                  </li>
                  <li className="d-flex row"><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p className="p-2 pt-0">clayton.skaggs89@gmail.com</p>
                  </li>
                </div>
                <li className="MailLink">
                  <a href="mailto: clayton.skaggs89@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-mailbox" viewBox="0 0 16 16">
                      <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z" />
                      <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}