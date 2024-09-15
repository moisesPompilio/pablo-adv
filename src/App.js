// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './page/Home';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { BtnWhatsApp } from './components/BtnWhatsApp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <BtnWhatsApp/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
