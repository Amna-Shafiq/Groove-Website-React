import React from "react";
import "./styles/FinestCuisinePage.css";
import vidavera from "../assets/vidavera.png";
import zamazulu from "../assets/zamazulu.png";
import khuwajayanni from "../assets/khuwajayanni.png";
import yamagata from "../assets/yamagata.png";


const FinestCuisinePage = React.forwardRef((props, ref) => {
  return (
    <section id="finest-cuisine" className="section" ref={ref}>
      <div className="finest-cuisine-content">
        <h1>Experience the Finest Cuisine</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="cards-section">
        <div className="cards-container">
          {/* Card 1 */}
          <div className="card">
            <img src={vidavera} alt="Card 1" />
            <div className="heading-with-arrow">
              <h3 className="card-title">Vida Vera</h3>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <button className="card-yellow-btn">100 SR PER GUEST</button>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src={zamazulu} alt="Card 2" />
            <div className="heading-with-arrow">
              <h3 className="card-title">Zama Zulu</h3>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <button className="card-yellow-btn">100 SR PER GUEST</button>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src={khuwajayanni} alt="Card 3" />
            <div className="heading-with-arrow">
              <h3 className="card-title">Khuwaja Yanni</h3>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <button className="card-yellow-btn">100 SR PER GUEST</button>
          </div>

          {/* Card 4 */}
          <div className="card">
            <img src={yamagata} alt="Card 4" />
            <div className="heading-with-arrow">
              <h3 className="card-title">Yamagata</h3>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <button className="card-yellow-btn">100 SR PER GUEST</button>
          </div>
        </div>
      </div>
    </section>
  );
});


export default FinestCuisinePage;
