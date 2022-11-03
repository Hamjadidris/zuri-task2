import React from "react";
import "./contact.css";
import FooterComponent from "../footer/footerComponent";

const ContactMe = () => {
    const name = "hamjad"
  return (
    <div className="contact-container">
      <div className="forms-container">
        <h1> Contact Me </h1>
        <h3> Hi there, contact me to ask me about anything you have in mind. </h3>

        <form>

          <section className="name-section">
            <div className="form-input">
              <label htmlFor="firstname">First name</label>
              <input 
              id="first_name"
              type="text" 
              name="firstname"
              placeholder="Enter your first name"
               />
            </div>

            <div className="form-input">
              <label htmlFor="lastname">Last name</label>
              <input 
              id="last_name"
              type="text" 
              name="lastname"
              placeholder="Enter your last name"
               />
            </div>
          </section>

          <div className="form-input email">
            <label htmlFor="email">Email</label>
            <input 
            id="email"
            type="email" 
            name="email"
            placeholder="yourname@email.com"
             />
          </div>

          <div className="form-input textarea">
          <label> Message </label>
            <textarea
             id="message"
             placeholder="Send me a message and I'll reply you as soon as possible..."
             ></textarea>
          </div>

          <div className="checkbox">
            <input
                name="checkbox"
                type="checkbox"
                id="remember-me"
            />
              <label htmlFor="checkbox"> <h5>You agree to providing your data to {name} who may contact you.</h5> </label>
          </div> 

        </form>
        <button id="btn__submit">
            Send Message
        </button>
      </div>
      <FooterComponent />
    </div>
  );
};

export default ContactMe;
