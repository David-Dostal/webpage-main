import React, { Component } from "react";
import ContactForm from "./ContactForm";

import about from "../../assets/images/about/about-6.jpg";

class ContactTwo extends Component {
  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">Contact Me</h2>
                <p className="description">
                  We will find an appropriate solution.
                </p>
              </div>
              <div className="form-wrapper">
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
                <img src={about} alt="trydo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactTwo;
