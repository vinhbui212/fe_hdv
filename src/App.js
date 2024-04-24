import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import CartDetail from './components/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
      
      <Route path="/product/:id" element={<ProductDetail></ProductDetail>}/>
      <Route path="" element={<Home></Home>}/>
      <Route path="/cart" element={<CartDetail></CartDetail>}/>
      
      </Routes>
    </div>
  );
}

export default App;
