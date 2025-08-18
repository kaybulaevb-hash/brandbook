const AnimatedBackground = () => {
  return (
    <>
      {/* Дополнительные кроссовки для красоты */}
      <div style={{
        position: 'fixed',
        top: '20%',
        left: '15%',
        fontSize: '3rem',
        opacity: 0.2,
        zIndex: -3,
        animation: 'float 8s ease-in-out infinite'
      }}>👟</div>
      
      <div style={{
        position: 'fixed',
        top: '60%',
        right: '20%',
        fontSize: '3rem',
        opacity: 0.2,
        zIndex: -3,
        animation: 'float 8s ease-in-out infinite',
        animationDelay: '-2s'
      }}>🥾</div>
      
      <div style={{
        position: 'fixed',
        bottom: '30%',
        left: '70%',
        fontSize: '3rem',
        opacity: 0.2,
        zIndex: -3,
        animation: 'float 8s ease-in-out infinite',
        animationDelay: '-4s'
      }}>👟</div>
      
      <div style={{
        position: 'fixed',
        top: '40%',
        left: '50%',
        fontSize: '3rem',
        opacity: 0.2,
        zIndex: -3,
        animation: 'float 8s ease-in-out infinite',
        animationDelay: '-6s'
      }}>🦶</div>
      
      <div style={{
        position: 'fixed',
        bottom: '15%',
        right: '10%',
        fontSize: '3rem',
        opacity: 0.2,
        zIndex: -3,
        animation: 'float 8s ease-in-out infinite',
        animationDelay: '-8s'
      }}>👟</div>
      
      {/* Дополнительные брендовые эмодзи */}
      <div style={{
        position: 'fixed',
        top: '25%',
        right: '40%',
        fontSize: '2.5rem',
        opacity: 0.15,
        zIndex: -2,
        animation: 'float 10s ease-in-out infinite',
        animationDelay: '-3s'
      }}>🏃‍♂️</div>
      
      <div style={{
        position: 'fixed',
        bottom: '40%',
        left: '25%',
        fontSize: '2.5rem',
        opacity: 0.15,
        zIndex: -2,
        animation: 'float 12s ease-in-out infinite',
        animationDelay: '-7s'
      }}>🏃‍♀️</div>
    </>
  );
};

export default AnimatedBackground;
