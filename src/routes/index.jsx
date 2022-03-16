import React from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';

const Routers = () => {
  const location = useLocation();

  return (
    <>
      <Routes location={'/'}>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
      {location.pathname !== '/' && (
        <Routes>
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      )}
    </>
  );
};

export default Routers;
