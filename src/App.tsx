import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import HomePage from './pages/HomePage';
import BrandPage from './pages/BrandPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <AnimatedBackground />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brand/:slug" element={<BrandPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;