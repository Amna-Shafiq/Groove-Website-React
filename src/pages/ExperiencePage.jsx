import React from "react";
import "./styles/Experience.css"; // Import your CSS file for styling
import rest from "../assets/rest.png";
import experience from "../assets/experience.png";
import events from "../assets/events.png";

const ExperiencePage = React.forwardRef((props,ref) => {
  return (
    <section id="experience" className="section" ref={ref}>
      <div className="experience-content">
        {/* Text Content */}
        <div className="text-content">
          <h1>
            Curate your experience
            <br /> as you like
          </h1>
          <button className="css-btn">
            Book Tickets <i className="fa fa-arrow-right"></i>
          </button>
        </div>

        {/* Image Scroll Section */}
        <section className="experience-image-scroll">
          <div className="experience-image-container">
            {/* Image Item 1 */}
            <div className="experience-image-item">
              <img src={rest} alt="Restaurants" />
              <h3 className="image-title">Restaurants</h3>
            </div>
            
            {/* Image Item 2 */}
            <div className="experience-image-item">
              <img src={experience} alt="Experiences" />
              <h3 className="image-title">Experiences</h3>
            </div>
            
            {/* Image Item 3 */}
            <div className="experience-image-item">
              <img src={events} alt="Events" />
              <h3 className="image-title">Events</h3>
            </div>
            
            {/* Image Item 4 */}
            <div className="experience-image-item">
              <img
                src="assets/eCQrqHBO1EiBzeZMSgFlqATb9F06Cu3va2ELmg2u.png"
                alt="Lucawo"
              />
              <h3 className="image-title">Lucawo</h3>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
});

export default ExperiencePage;
