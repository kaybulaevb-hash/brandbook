import { useState } from 'react';
import './CategoryTabs.css';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'general', name: 'Общее', icon: '📋' },
  { id: 'smm', name: 'СММ', icon: '📱' },
  { id: 'design', name: 'Дизайн', icon: '🎨' },
  { id: 'sales', name: 'Продажи', icon: '💼' }
];

const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className="category-tabs">
      <div className="tabs-container">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`tab ${activeCategory === category.id ? 'active' : ''} ${hoveredCategory === category.id ? 'hovered' : ''}`}
            onClick={() => onCategoryChange(category.id)}
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <span className="tab-icon">{category.icon}</span>
            <span className="tab-name">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;

