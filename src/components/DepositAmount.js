import React, { useState } from 'react';

const DepositModule = () => {
  const [accountType, setAccountType] = useState('Savings'); // Default account type
  const [depositAmount, setDepositAmount] = useState('');
  const [availableBalance, setAvailableBalance] = useState(0); // Default available balance

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'depositAmount') {
    
      const numericValue = parseFloat(value);
      if (!isNaN(numericValue) && numericValue >= 0) {
        setDepositAmount(numericValue);
      } else {
        setDepositAmount('');
      }
    } else {
      setAccountType(value);
    }
  };

  const handleDeposit = () => {
    // Validation and deposit logic here...
    if (depositAmount <= 0) {
   
      alert('Deposit amount must be greater than zero.');
    } else {
      // Update the available balance
      setAvailableBalance((prevBalance) => prevBalance + depositAmount);
      // You can also send the deposit data to your backend for processing if needed
    }
  };

  return (
    <div>
      <h2>Deposit to Account</h2>
      <label>Account Type:</label>
      <select
        name="accountType"
        value={accountType}
        onChange={handleInputChange}
        required
      >
        <option value="Savings">Savings</option>
        <option value="Salary">Salary</option>
       
      </select>

      <label>Deposit Amount:</label>
      <input
        type="number"
        name="depositAmount"
        value={depositAmount}
        onChange={handleInputChange}
        required
      />

      <button onClick={handleDeposit}>Deposit</button>

      <p>Available Balance: {availableBalance}</p>
    </div>
  );
};

export default DepositModule;