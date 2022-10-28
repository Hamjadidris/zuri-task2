import React from 'react'
import './App.css';
import ProfileComponent from './profile/profileComponent';
import LinkComponent from './link/linkComponent';
import FooterComponent from './footer/footerComponent';

function App() {
  return (
    <div className="App">
      <ProfileComponent />
      <LinkComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
