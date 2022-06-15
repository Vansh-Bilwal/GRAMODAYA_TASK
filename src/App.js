import './App.css';
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';

function App() {
  return (
    <Router>
      <Fragment>
        <div className='App'>
          <Routes>
            <Route exact path='/' element={<Landing />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
