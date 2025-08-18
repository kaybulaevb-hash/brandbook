import { useEffect, useState } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % 3);
    }, 6000); // Смена каждые 6 секунд

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animated-background" data-testid="animated-background">
      <div className="background-overlay" />
      
      {/* Анимированные фигуры вместо изображений */}
      <div className={`shape-set set-${currentSet}`}>
        <div className="floating-shape shape-1">👟</div>
        <div className="floating-shape shape-2">👟</div>
        <div className="floating-shape shape-3">👟</div>
        <div className="floating-shape shape-4">👟</div>
        <div className="floating-shape shape-5">👟</div>
        <div className="floating-shape shape-6">👟</div>
      </div>
      
      {/* Градиентные орбы */}
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />
      <div className="gradient-orb orb-3" />
      
      {/* Дополнительные геометрические фигуры */}
      <div className="geometric-shape geo-1" />
      <div className="geometric-shape geo-2" />
      <div className="geometric-shape geo-3" />
      
      {/* Тестовый элемент для отладки */}
      <div style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: 'rgba(255, 0, 0, 0.5)',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '5px',
        fontSize: '12px',
        zIndex: 999999
      }}>
        BG Active: {currentSet}
      </div>
    </div>
  );
};

export default AnimatedBackground;
