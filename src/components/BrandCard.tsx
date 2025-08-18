import { Link } from 'react-router-dom';
import './BrandCard.css';

interface BrandCardProps {
  slug: string;
  title: string;
  description: string;
  color: string;
}

const BrandCard = ({ slug, title, description, color }: BrandCardProps) => {
  return (
    <Link to={`/brand/${slug}`} className="brand-card" style={{ borderLeftColor: color }}>
      <div className="brand-card-header">
        <h3 className="brand-card-title">{title}</h3>
        <p className="brand-card-description">{description}</p>
      </div>
    </Link>
  );
};

export default BrandCard;
