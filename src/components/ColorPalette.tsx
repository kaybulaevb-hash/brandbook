import './ColorPalette.css';

interface ColorPaletteProps {
  colors: {
    name: string;
    hex: string;
    description?: string;
  }[];
}

const ColorPalette = ({ colors }: ColorPaletteProps) => {
  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
  };

  return (
    <div className="color-palette">
      <div className="color-grid">
        {colors.map((color, index) => (
          <div 
            key={index} 
            className="color-card"
            onClick={() => copyToClipboard(color.hex)}
          >
            <div 
              className="color-swatch" 
              style={{ backgroundColor: color.hex }}
            />
            <div className="color-info">
              <h4 className="color-name">{color.name}</h4>
              <p className="color-hex">{color.hex}</p>
              {color.description && (
                <p className="color-description">{color.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="copy-hint">Нажмите на цвет, чтобы скопировать HEX-код</p>
    </div>
  );
};

export default ColorPalette;
