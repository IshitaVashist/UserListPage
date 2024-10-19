import React, { useState } from "react";


const EmployeeForm = ({ onAdd }) => {
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    fullName: "",
    userName: "",
    maritalStatus: "",
    employeeStatus: "",
  });

  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newEmployee.firstName ||
      !newEmployee.fullName ||
      !newEmployee.userName ||
      !newEmployee.maritalStatus ||
      !newEmployee.employeeStatus
    ) {
      alert("All fields must be filled");
      return;
    }

    onAdd(newEmployee); // Add new employee
    setNewEmployee({
      firstName: "",
      fullName: "",
      userName: "",
      maritalStatus: "",
      employeeStatus: "",
    });
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={newEmployee.firstName}
          onChange={handleChange}
          required
        />
      </td>
      <td>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={newEmployee.fullName}
          onChange={handleChange}
          required
        />
      </td>
      <td>
        <input
          type="text"
          name="userName"
          placeholder="User Name"
          value={newEmployee.userName}
          onChange={handleChange}
          required
        />
      </td>
      <td>
        <input
          type="text"
          name="maritalStatus"
          placeholder="Marital Status"
          value={newEmployee.maritalStatus}
          onChange={handleChange}
          required
        />
      </td>
      <td>
        <input
          type="text"
          name="employeeStatus"
          placeholder="Employee Status"
          value={newEmployee.employeeStatus}
          onChange={handleChange}
          required
        />
      </td>
      <td>
        <button onClick={handleSubmit}>Add</button>
      </td>
    </tr>
  );
};

export default EmployeeForm;
