import { useState, useEffect } from 'react';

const ColorConverter = () => {
  const [hexValue, setHexValue] = useState("#9921ff");
  const [output, setOutput] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState('red');
  const [textColor, setTextColor] = useState('white'); 

  const isValidHex = (hex: string) => /^#[0-9A-F]{6}$/i.test(hex);

  const hexToRgb = (hex: string) => {
    if (!isValidHex(hex)) return null;
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
  };

  const updateBackgroundColor = (hexValue: string) => {
    const rgb = hexToRgb(hexValue);
    if (rgb) {
      setOutput(rgb);
      setBackgroundColor(rgb);
      setTextColor('white');
    } else {
      setOutput('Ошибка!!!');
      setBackgroundColor('darkred');
      setTextColor('red');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newHex = event.target.value;
    setHexValue(newHex);
    if (newHex.length === 7) updateBackgroundColor(newHex);
  };

  useEffect(() => {
    updateBackgroundColor(hexValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container" style={{ backgroundColor, color: textColor }}>
      <input className="input"
        type="text"
        value={hexValue}
        onChange={handleChange}
        maxLength={7}
      />
      <div className="output" style={{ color: output === 'Ошибка!!!' ? 'red' : textColor }}>
        {output}
      </div>
    </div>
  );
};

export default ColorConverter;
