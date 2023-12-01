import React, { Component } from "react";

class CustomerRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
      address: "",
      country: "",
      states: "",
      email: "",
      contactNo: "",
      dob: "",
      accountType: "",
      branchName: "",
      initialDeposit: "",
      proofType: "",
      proofNumber: ""
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  handleProofTypeChange = (event) => {
    this.setState({ proofType: event.target.value });
  };
''
  render() {
    return (
      <div className="form">
        <h2>Customer Registration</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />
          <br />
          <label>username:</label>
          <input
          // style={
          //   {marginLeft:"10rem"}
          // }
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            required
          />{" "}
          <br />
          <label>password:</label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />{" "}
          <br />
          <label>address:</label>
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleInputChange}
            required
          />
          <br />
          <label>country:</label>
          <input
            type="text"
            name="country"
            value={this.state.country}
            onChange={this.handleInputChange}
            required
          />{" "}
          <br />
          <label>State:</label>
          <input
            type="text"
            name="states"
            value={this.state.states}
            onChange={this.handleInputChange}
            required
          />{" "}
          <br />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />{" "}
          <br />
          <label>contactNo:</label>
          <input
            type="text"
            name="contactNo"
            value={this.state.contactNo}
            onChange={this.handleInputChange}
            required
          />{" "}
          <br />
          <label>dob:</label>
          <input
            type="date"
            name="dob"
            value={this.state.dob}
            onChange={this.handleInputChange}
            required
          />{" "}
          <br />
          <label>accountType:</label>
          <input
            type="text"
            name="accountType"
            value={this.state.accountType}
            onChange={this.handleInputChange}
            required
          />{" "}
          <br />
          <label>branchName:</label>
          <input
            type="text"
            name="branchName"
            value={this.state.branchName}
            onChange={this.handleInputChange}
            required
          />{" "}
          <br />
          <label>initialDeposit:</label>
          <input
            type="number"
            name="initialDeposit"
            value={this.state.initialDeposit}
            onChange={this.handleInputChange}
            required
          />
          <br />
          <div>
            <label>Proof Type:</label>
            <select
              name="proofType"
              value={this.state.proofType}
              onChange={this.handleProofTypeChange}
              required
            >
              <option value="">Select Proof Type</option>
              <option value="Aadhar">Aadhar</option>
              <option value="PAN">PAN</option>
            </select>
          </div>
          <br />
          <label>proofNumber:</label>
          <input
            type="number"
            name="proofNumber"
            value={this.state.proofNumber}
            onChange={this.handleInputChange}
            required
          />
          <br />
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default CustomerRegistration;