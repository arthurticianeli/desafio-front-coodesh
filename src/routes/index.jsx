import React from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Modal from '../pages/ModalUser';

const Routers = () => {
  const location = useLocation();

  return (
    <>
      <Routes location={'/'}>
        <Route exact path="/" element={<Home />} />
      </Routes>
      {location.pathname !== '/' && (
        <Routes>
          <Route path="/profile/:page/:id" element={<Modal />} />
        </Routes>
      )}
    </>
  );
};

export default Routers;
