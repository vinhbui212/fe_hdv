
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import User from './components/User';
import { GoogleLogin } from '@react-oauth/google';
import Login1 from './components/Login';
import LDAP from './components/LDAP';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/ldap" element={<LDAP></LDAP>}/>
      <Route path="/login" element={<Login1></Login1>}/>
      <Route path="/admin" element={<Admin></Admin>}/>
      <Route path="/user" element={<User></User>}/>
      </Routes>
    </div>
  );
}

export default App;
