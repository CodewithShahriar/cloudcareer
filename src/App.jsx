import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* Footer */}
    </div>
  );
};

export default App;
