import React, { useState } from 'react';

const ApplyLoan = () => {
  const [loanType, setLoanType] = useState('Personal');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanApplyDate, setLoanApplyDate] = useState('');
  const [rateOfInterest, setRateOfInterest] = useState('');
  const [duration, setDuration] = useState('');
  const [courseFee, setCourseFee] = useState(''); 
  const [course, setCourse] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherOccupation, setFatherOccupation] = useState('');
  const [annualIncome, setAnnualIncome] = useState('');
  const [companyName, setCompanyName] = useState(''); 
 const [designation, setDesignation] = useState('');
  const [totalExperience, setTotalExperience] = useState('');
  const [expWithCurrentCompany, setExpWithCurrentCompany] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'loanType':
        setLoanType(value);
        break;
      case 'loanAmount':
        setLoanAmount(value);
        break;
      case 'loanApplyDate':
        setLoanApplyDate(value);
        break;
      case 'rateOfInterest':
        setRateOfInterest(value);
        break;
      case 'duration':
        setDuration(value);
        break;
      case 'courseFee':
        setCourseFee(value);
        break;
      case 'course':
        setCourse(value);
        break;
      case 'fatherName':
        setFatherName(value);
        break;
      case 'fatherOccupation':
        setFatherOccupation(value);
        break;
      case 'annualIncome':
        setAnnualIncome(value);
        break;
      case 'companyName':
        setCompanyName(value);
        break;
      case 'designation':
        setDesignation(value);
        break;
      case 'totalExperience':
        setTotalExperience(value);
        break;
      case 'expWithCurrentCompany':
        setExpWithCurrentCompany(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    // You can send the loan application data to your backend for processing
  };

  return (
    <div>
      <h2>Apply for a Loan</h2>
      <form onSubmit={handleSubmit}>
        <label>Loan Type:</label>
        <select
          name="loanType"
          value={loanType}
          onChange={handleInputChange}
          required
        >
          <option value="Personal">Personal Loan</option>
          <option value="Home">Home Loan</option>
          <option value="Education">Education Loan</option>
        </select>

        <label>Loan Amount:</label>
        <input
          type="number"
          name="loanAmount"
          value={loanAmount}
          onChange={handleInputChange}
          required
        />

        
        {loanType === 'Education' && (
          <div>
            <label>Course Fee:</label>
            <input
              type="number"
              name="courseFee"
              value={courseFee}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        {loanType === 'Personal' && (
          <div>
            <label>Company Name:</label>
            <input
              type="text"
              name="companyName"
              value={companyName}
              onChange={handleInputChange}
              required
            />
            {/* Add other fields specific to Personal Loan */}
          </div>
        )}

        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default ApplyLoan;