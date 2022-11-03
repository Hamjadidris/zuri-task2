import React from 'react'
import './App.css';
// import ProfileComponent from './profile/profileComponent';
// import LinkComponent from './link/linkComponent';
// import FooterComponent from './footer/footerComponent';
import LandingPage from './landingPage/landingPage';
import ContactMe from './contactMe/ContactMe';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/contact" element={<ContactMe />}></Route>
      {/* <Route path="/hostels" element={<HostelPage />}></Route> */}
    </Routes>
      {/* <ProfileComponent />
      <LinkComponent />
      <FooterComponent /> */}
    </div>
  );
}

export default App;
