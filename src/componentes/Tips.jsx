import React, { useState } from 'react';
import '../hojas-de-estilo/Tips.css';
import ircdev from '../imagenes/ircdev.png' // Ajusta la ruta según tu estructura de carpetas

const Tips = () => {
  const [price, setPrice] = useState('');
  const [tip, setTip] = useState(null);
  const [total, setTotal] = useState(null);
  const [error, setError] = useState('');

  const calculateTip = () => {
    if (!price || isNaN(price) || parseFloat(price) <= 0) {
      setError('Please enter a valid number greater than 0.');
      setTip(null);
      setTotal(null);
      return;
    }

    const calculatedTip = (parseFloat(price) * 1.5) / 100;
    setTip(calculatedTip.toFixed(2));
    setTotal((parseFloat(price) + calculatedTip).toFixed(2));
    setError('');
  };

  const clearFields = () => {
    setPrice('');
    setTip(null);
    setTotal(null);
    setError('');
  };

  return (
    <div>
      {/* Ícono animado fuera del contenedor */}
      <div className="icon-container">
        <img src={ircdev} alt="App Logo" className="animated-icon" />
      </div>

      <div className="tips-container">
        <h1>Service Charge Calculator</h1>
        <div className="input-container">
          <label htmlFor="price">Enter the price of the dish:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button onClick={calculateTip} className="calculate-btn">
          Calculate Tip
        </button>
        <button onClick={clearFields} className="clear-btn">
          Empty
        </button>
        {tip !== null && (
          <div className="result-container">
            <p className="tip-amount">Suggested tip (1.50%): ${tip}</p>
            <p className="total-amount">Total with tip: ${total}</p>
            <p className="clear-message">Clear to calculate another balance.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tips;
