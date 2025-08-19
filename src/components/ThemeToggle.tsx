import { useState, useEffect } from 'react';
import './ThemeToggle.css';

interface ThemeToggleProps {
  onThemeChange?: (theme: 'light' | 'dark') => void;
}

const ThemeToggle = ({ onThemeChange }: ThemeToggleProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Проверяем сохранённую тему или системные настройки
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDark(shouldBeDark);
    
    // Применяем тему к документу
    document.documentElement.setAttribute('data-theme', shouldBeDark ? 'dark' : 'light');
    
    if (onThemeChange) {
      onThemeChange(shouldBeDark ? 'dark' : 'light');
    }
  }, [onThemeChange]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // Сохраняем в localStorage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    // Применяем к документу
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    
    if (onThemeChange) {
      onThemeChange(newTheme ? 'dark' : 'light');
    }
  };

  return (
    <div className="theme-toggle">
      <span className={`theme-label ${!isDark ? 'active' : ''}`}>☀️</span>
      <button 
        className={`toggle-slider ${isDark ? 'dark' : 'light'}`}
        onClick={toggleTheme}
        aria-label="Переключить тему"
      >
        <div className="slider-thumb" />
      </button>
      <span className={`theme-label ${isDark ? 'active' : ''}`}>🌙</span>
    </div>
  );
};

export default ThemeToggle;
