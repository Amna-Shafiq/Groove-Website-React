import React, { useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MallPage from './pages/MallPage';
import BookTicketsPage from './pages/BookTicketsPage';
import FinestCuisinePage from './pages/FinestCuisinePage';
import ExperiencePage from './pages/ExperiencePage';
import MapPage from './pages/MapPage';
import ContactUsPage from './pages/ContactUsPage';


function App() {

  const mallRef = useRef(null);
  const bookTicketsRef = useRef(null);
  const finestcuisineRef = useRef(null);
  const experienceRef = useRef(null);
  const mapRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <HomePage scrollToSection={scrollToSection} />
      <MallPage ref={mallRef} />
      <BookTicketsPage ref={bookTicketsRef} />
      <FinestCuisinePage ref={finestcuisineRef}/>
      <ExperiencePage ref={experienceRef}/>
      <MapPage ref={mapRef}/>
      <ContactUsPage ref={contactRef}/>
    </div>
  );
}

export default App;
