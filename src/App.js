import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './scenes/Home/Home.jsx'
import Navbar from './scenes/Navbar/Navbar.jsx'
import './App.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
