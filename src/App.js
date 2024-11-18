import React, { useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './shared/components/Footer';
import HomePage from './pages/HomePage';
import MallPage from './pages/MallPage';
import BookTicketsPage from './pages/BookTicketsPage';
import FinestCuisinePage from './pages/FinestCuisinePage';


function App() {

  const mallRef = useRef(null);
  const bookTicketsRef = useRef(null);
  const finestcuisine = useRef(null);

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
      <FinestCuisinePage ref={finestcuisine}/>

    </div>
  );
}

export default App;
