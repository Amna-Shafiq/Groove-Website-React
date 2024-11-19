import React from "react";
import "./styles/MapPage.css";
import map from "../assets/map.png";

const MapPage = () => {
  return (
    <section id="map" className="section">
      <div className="map-content">
        {/* Map Image */}
        <img src={map} alt="Map" />
        
        {/* Map Text Content */}
        <div className="map-text-content">
          <p>EXPERIENCE THE GROOVE</p>
          <h1>Find your Place</h1>
          <p>
            Our Interactive map will show you the shops, restaurants that you want to see.
          </p>
          <button className="css-btn">
            Open the map <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MapPage;