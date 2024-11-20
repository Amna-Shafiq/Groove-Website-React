import React from "react";
import "./styles/ContactUs.css"; // Import your CSS for styling
import VISA from "../assets/VISA.png";
import MasterCard from "../assets/mastercard-logo-mastercard-logo-png-vector-download-19.png";
import MaskGroup from "../assets/Mask Group 456.png";
import logo from "../assets/PHOTO-2021-06-16-18-42-19_copy_2@2x.png";
import googleplay from "../assets/google-play.png";
import appstore from "../assets/app-store.png";

const ContactUsPage = React.forwardRef((prop,ref) => {
  return (
    <section id="contact-us" className="section" ref={ref}>
      <div className="contact-us-content">
        {/* Contact Us Top Section */}
        <div className="contact-us-top">
          <div className="contact-us-top-left">
            <h1>
              Join us for an
              <br />
              unforgettable experience
            </h1>
          </div>
          <div className="contact-us-top-right">
            <p>DOWNLOAD THE GROOVES APP</p>
            <img src={googleplay} alt="Google Play" />
            <img src={appstore} alt="App Store" />
          </div>
        </div>

        {/* Contact Us Middle Section */}
        <div className="contact-us-mid">
          <div className="location">
            <div className="contact-titles">LOCATION</div>
            <br />
            Al-Hizam Park
            <br />
            Al-Semairi, Yanbu Al Bahr 46455
            <br />
            Riyadh Saudi Arabia
          </div>
          <div className="working-hours">
            <div className="contact-titles">WORKING HOURS</div>
            <br />
            Sun until Thurs: 4:00 PM
            <br />
            Fri & Sat: 2:30 PM
            <br />
            <br />
            Gates Close at:
            <br />
            Sat until Wed: 12:00 AM
            <br />
            Thu & Fri: 12:30 AM
          </div>
          <div className="guest-service-call">
            <div className="contact-titles">GUEST CALL SERVICE</div>
            <br />
            cc@thegroves-sa.com
            <br />
            920001672
            <br />
            <br />
            +966556631309
          </div>
        </div>

        {/* Contact Us Footer Section */}
        <div className="contact-us-footer">
          <div className="footer-top">
            <div className="logo">
              <img
                src={logo}
                alt="Logo"
              />
            </div>
            <div className="social-icons-contact">
              <a href="#">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-x"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-snapchat-ghost"></i>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <nav className="contact-nav-container">
              <ul className="contact-nav-list">
                <li>
                  <a href="#">Terms and Condition</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">@2023 Grooves for Entertainment</a>
                </li>
              </ul>
            </nav>
            <div className="footer-cards">
              <img src={VISA} alt="VISA" />
              <img
                src={MasterCard}
                alt="Mastercard"
              />
              <img src={MaskGroup} alt="Payment Method" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactUsPage;
