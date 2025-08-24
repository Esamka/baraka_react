import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SecondPage from './pages/SecondPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Layout><HomePage /></Layout>} 
        />
        <Route 
          path="/second" 
          element={<Layout><SecondPage /></Layout>} 
        />
      </Routes>
    </Router>
  );
}

export default App;
