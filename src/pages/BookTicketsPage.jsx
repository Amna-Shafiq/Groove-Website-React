import React from "react";
import "./styles/BookTickets.css"; 
import LittleKrazy from "../assets/DKSLFAKPogt7W4Dtr3ikEHT7thgkqajNvA5G6zJm.png"
import Hawanim from "../assets/rest.png";
import PicnicMart from "../assets/E3X3DJS9gC0f5znLk9bxGE2OVo5LDR5hIy2Tms0J.png"
import Lucawo from "../assets/eCQrqHBO1EiBzeZMSgFlqATb9F06Cu3va2ELmg2u.png";

const BookTicketsPage = React.forwardRef((props, ref) => {
  return (
    <section id="book-tickets" className="section" ref={ref}>
      <div className="book-tickets-content">
        {/* Green rectangle section */}
        <div className="green-rectangle">
          25 SR/GUEST
          <div className="heading-with-arrow">
            <h2>Get Your General Access Ticket</h2>
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
          <p>
            Book tickets Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. <br />
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </p>
        </div>

        {/* Main heading */}
        <h1>
          Book General Access ticket and <br />
          enjoy attractions for free.
        </h1>

        {/* Button */}
        <button className="book-btn css-btn">
          Book General Access Ticket <i className="fa fa-arrow-right"></i>
        </button>

        {/* Image scroll section */}
        <section className="image-scroll">
          <div className="image-container">
            <div className="image-item">
              <img
                src={LittleKrazy}
                alt="Little Krazy"
              />
              <h2 className="image-title">Little Krazy</h2>
            </div>
            <div className="image-item">
              <img src={Hawanim} alt="Hawanim Groove City" />
              <h2 className="image-title">Hawanim Groove City</h2>
            </div>
            <div className="image-item">
              <img
                src={PicnicMart}
                alt="Picnic Mart"
              />
              <h2 className="image-title">Picnic Mart</h2>
            </div>
            <div className="image-item">
              <img
                src={Lucawo}
                
                alt="Lucawo"
              />
              <h2 className="image-title">Lucawo</h2>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
});

export default BookTicketsPage;
