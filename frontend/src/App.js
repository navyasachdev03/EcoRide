import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Search from './pages/Search';
import OfferRide from './pages/OfferRide';
import Account from './pages/Account';
import Faq from './pages/Faq';
import MyRides from './pages/MyRides';
import Profile from './pages/Profile';
import Verification from './pages/Verification';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {

  const [userData, setUserData] = useState(null);
  const [isDriverVerified, setIsDriverVerified] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (userData) => {
    setUserData(userData);
    navigate('/');
  }
  
  const handleProfileVerification = (details) => {
    if (userData) {
      const updatedUserData = {
        ...userData,
        isDriver: true,
        carName: details.carName,
        carNumber: details.carNumber,
        driverPhoto: details.driverPhoto
      };
      setUserData(updatedUserData);
      setIsDriverVerified(true);
      navigate('/offer');
    }
  }

  useEffect(() => {
    if (userData && userData.isDriver) {
      setIsDriverVerified(true);
    }
  }, [userData]);

  const determineOfferElement = () => {

    if(userData){
      if (userData.isDriver) {
        return isDriverVerified ? <OfferRide userData={userData}/> : <Verification onVerify={handleProfileVerification} />;
      }
    }
    return <Verification onVerify={handleProfileVerification} />; 
  };


  return (
    <div className="App">
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/offer" element={determineOfferElement()}/>
          <Route path="/account" element={<Account onLogin={handleLogin} />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/myrides" element={<MyRides />} />
          <Route path="/profile" element={<Profile userData={userData} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
