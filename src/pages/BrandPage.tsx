import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { brandSections } from '../data/brandData';
import './BrandPage.css';

const BrandPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const section = brandSections.find(s => s.slug === slug);

  if (!section) {
    return (
      <div className="brand-page">
        <Header />
        <div className="brand-content">
          <div className="not-found">
            <h1>Раздел не найден</h1>
            <Link to="/" className="back-link">← Вернуться на главную</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="brand-page">
      <Header />
      <div className="brand-content">
        <div className="brand-header">
          <Link to="/" className="back-link">← Назад к разделам</Link>
          <div className="brand-title-section" style={{ borderLeftColor: section.color }}>
            <h1 className="brand-title">{section.title}</h1>
            <p className="brand-subtitle">{section.content.subtitle}</p>
          </div>
        </div>

        <div className="brand-sections">
          {section.content.sections.map((contentSection, index) => (
            <div key={index} className="content-section">
              <h2 className="section-title">{contentSection.title}</h2>
              <ul className="section-list">
                {contentSection.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="section-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {section.content.image && (
          <div className="brand-image">
            <img src={section.content.image} alt={section.title} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandPage;
