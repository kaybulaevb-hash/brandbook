import Header from '../components/Header';
import BrandCard from '../components/BrandCard';
import { brandSections } from '../data/brandData';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">Брендбук Onmyfeet</h1>
          <p className="hero-subtitle">Единый стандарт бренда</p>
        </div>
        
        <div className="cards-container">
          <div className="cards-grid">
            {brandSections.map((section) => (
              <BrandCard
                key={section.slug}
                slug={section.slug}
                title={section.title}
                description={section.description}
                color={section.color}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
