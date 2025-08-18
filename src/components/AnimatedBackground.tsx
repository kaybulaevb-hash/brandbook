import './AnimatedBackground.css';

const AnimatedBackground = () => {
  console.log('AnimatedBackground rendering'); // Для отладки

  return (
    <>
      {/* Тестовый элемент для отладки */}
      <div style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: 'red',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '14px',
        zIndex: 999999
      }}>
        BG LOADED ✅
      </div>
      
      <div className="animated-background">
        {/* Простые плавающие кроссовки */}
        <div className="floating-shape shape-1">👟</div>
        <div className="floating-shape shape-2">👟</div>
        <div className="floating-shape shape-3">👟</div>
        <div className="floating-shape shape-4">👟</div>
        <div className="floating-shape shape-5">👟</div>
        <div className="floating-shape shape-6">👟</div>
        
        {/* Градиентные орбы */}
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
        
        {/* Геометрические фигуры */}
        <div className="geometric-shape geo-1" />
        <div className="geometric-shape geo-2" />
        <div className="geometric-shape geo-3" />
      </div>
    </>
  );
};

export default AnimatedBackground;
