import React, { useState } from 'react';
import '../hojas-de-estilo/Tips.css';

const Tips = () => {
  const [price, setPrice] = useState(''); // Precio ingresado por el usuario
  const [tip, setTip] = useState(null); // Propina calculada
  const [total, setTotal] = useState(null); // Total con la propina
  const [error, setError] = useState(''); // Mensaje de error si el valor no es válido

  // Función para calcular la propina
  const calculateTip = () => {
    if (!price || isNaN(price) || parseFloat(price) <= 0) {
      setError('Please enter a valid number greater than 0.');
      setTip(null);
      setTotal(null);
      return;
    }

    const calculatedTip = (parseFloat(price) * 1.5) / 100; // 1.50% del precio
    setTip(calculatedTip.toFixed(2)); // Establece la propina con dos decimales
    setTotal((parseFloat(price) + calculatedTip).toFixed(2)); // Total con la propina
    setError(''); // Limpiar mensaje de error
  };

  // Función para limpiar los campos
  const clearFields = () => {
    setPrice('');
    setTip(null);
    setTotal(null);
    setError('');
  };

  return (
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
      {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error */}
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
          <p className="clear-message">Clear to calculate another balance.</p> {/* Nuevo mensaje */}
        </div>
      )}
    </div>
  );
};

export default Tips;
