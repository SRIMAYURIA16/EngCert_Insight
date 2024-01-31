// PaymentPage.jsx
import React, { useState } from 'react';
import '../assets/css/PaymentPage.css';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [isPaymentSuccessful, setPaymentSuccessful] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!cardNumber.trim() || !/^[0-9]{16}$/.test(cardNumber)) {
      isValid = false;
      newErrors.cardNumber = 'Valid 16-digit Card Number is required';
    }

    if (!expiryDate.trim() || !/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(expiryDate)) {
      isValid = false;
      newErrors.expiryDate = 'Valid Expiry Date (MM/YY) is required';
    }

    if (!cvv.trim() || !/^[0-9]{3}$/.test(cvv)) {
      isValid = false;
      newErrors.cvv = 'Valid 3-digit CVV is required';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handlePayment = () => {
    if (validateForm()) {
     
      setTimeout(() => {
        setPaymentSuccessful(true);
      }, 2000);
    }
  };

  return (
    <div className="payment-container">
      <div className={`payment-content ${isPaymentSuccessful ? 'success' : ''}`}>
        {isPaymentSuccessful ? (
          <>
            <h2 className="payment-title">Payment Successful!</h2>
            <div className="success-icon">&#10004;</div>
          </>
        ) : (
          <>
            <h2 className="payment-title">Payment Details</h2>
            {errors.cardNumber && <p className="error-message">{errors.cardNumber}</p>}
            <div className="card-details">
              <label htmlFor="cardNumber" className="card-label">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                className={`card-input ${errors.cardNumber ? 'error' : ''}`}
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            {errors.expiryDate && <p className="error-message">{errors.expiryDate}</p>}
            <div className="card-details">
              <label htmlFor="expiryDate" className="card-label">Expiry Date:</label>
              <input
                type="text"
                id="expiryDate"
                className={`card-input ${errors.expiryDate ? 'error' : ''}`}
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>
            {errors.cvv && <p className="error-message">{errors.cvv}</p>}
            <div className="card-details">
              <label htmlFor="cvv" className="card-label">CVV:</label>
              <input
                type="text"
                id="cvv"
                className={`card-input ${errors.cvv ? 'error' : ''}`}
                placeholder="123"
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
              />
            </div>
            <button className="pay-button" onClick={handlePayment}>Pay Now</button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
