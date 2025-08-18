import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <h1 className="header-title">Брендбук Onmyfeet</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
