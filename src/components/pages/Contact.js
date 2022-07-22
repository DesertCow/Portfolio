import React from 'react';
import '../../styles/Contact.css';

export default function Contact() {
  return (
    <div className="d-flex justify-content-center">
      <section class="mb-4 contactForm p-3">
        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>
        <div class="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input type="text" id="name" name="name" class="form-control"></input>
                    <label for="name" class="">Your name</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input type="text" id="email" name="email" class="form-control"></input>
                    <label for="email" class="">Your email</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input type="text" id="subject" name="subject" class="form-control"></input>
                    <label for="subject" class="">Subject</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">

                  <div class="md-form">
                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>
            <div class="text-center text-md-left">
              <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
          </div>
          <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
              <li><i class="fas fa-map-marker-alt fa-2x"></i>
                <p>San Francisco, CA 94126, USA</p>
              </li>
              <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>clayton.skaggs89@gmail.com</p>
              </li>
              <li><i class="mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}