import { useEffect, useState } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const [currentImageSet, setCurrentImageSet] = useState(0);

  // Массивы URL изображений кроссовок (можно заменить на свои)
  const imageSets = [
    [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80'
    ],
    [
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80'
    ],
    [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=80',
      'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80',
      'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=800&q=80',
      'https://images.unsplash.com/photo-1574408938507-85d8d5c7a9ce?w=800&q=80'
    ]
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageSet((prev) => (prev + 1) % imageSets.length);
    }, 8000); // Смена каждые 8 секунд

    return () => clearInterval(interval);
  }, [imageSets.length]);

  return (
    <div className="animated-background">
      <div className="background-overlay" />
      {imageSets.map((imageSet, setIndex) => (
        <div
          key={setIndex}
          className={`image-set ${setIndex === currentImageSet ? 'active' : ''}`}
        >
          {imageSet.map((imageUrl, imageIndex) => (
            <div
              key={imageIndex}
              className={`floating-image image-${imageIndex + 1}`}
              style={{
                backgroundImage: `url(${imageUrl})`,
                animationDelay: `${imageIndex * 0.5}s`
              }}
            />
          ))}
        </div>
      ))}
      
      {/* Дополнительные декоративные элементы */}
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />
      <div className="gradient-orb orb-3" />
    </div>
  );
};

export default AnimatedBackground;
