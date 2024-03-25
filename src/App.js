import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Cart from './pages/cart';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
