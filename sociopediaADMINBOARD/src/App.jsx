import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import AdvertsContent from './AdvertsContent';
import CategoryContent from './CategoryContent';

const App = () => {
  // Define dummy values for showAdverts and showCategories
  const showAdverts = true;
  const showCategories = false;

  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <Home />
      {/* Render AdvertsContent and CategoryContent conditionally based on logic */}
      {showAdverts && <AdvertsContent />}
      {showCategories && <CategoryContent />}
    </div>
  );
}

export default App;
