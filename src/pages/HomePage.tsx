import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import CategoryTabs from '../components/CategoryTabs';
import BrandCard from '../components/BrandCard';
import { brandSections } from '../data/brandData';
import './HomePage.css';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'design');

  useEffect(() => {
    setSearchParams({ category: activeCategory });
  }, [activeCategory, setSearchParams]);

  const filteredSections = brandSections.filter(section => section.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">Брендбук Onmyfeet</h1>
          <p className="hero-subtitle">Единый стандарт бренда</p>
        </div>
        
        <CategoryTabs 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChange} 
        />
        
        <div className="cards-container">
          <div className="cards-grid">
            {filteredSections.map((section) => (
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
