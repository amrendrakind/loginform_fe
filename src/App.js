/* eslint-disable */
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Logout from './pages/Logout';
import Verifyotp from './pages/Verifyotp';
import Homepage from './pages/Homepage';

function App() {
  const [objAuth, setAuthenticated] = useState({ authenticated: false });
  const handleCallback = (authValue) => {
    setAuthenticated({ authenticated: authValue });
  };

  const user = localStorage.getItem('user_id');

  useEffect(() => {
    if (user === null) {
      setAuthenticated({ authenticated: false });
    } else {
      setAuthenticated({ authenticated: true });
    }
  }, []);
  return (
    <>
      <div className="screen-area">
         <Routes>
            <Route path="/" element={<Login handleClick={handleCallback} />} />
            <Route path="/logout" element={<Logout handleClick={handleCallback} />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/verifyotp" element={<Verifyotp />} />
            <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
