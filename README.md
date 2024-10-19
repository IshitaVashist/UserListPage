import React, { useState, useEffect } from "react";
import EmployeeRow from "./Components.jsx/EmployeeRow";
import EmployeeForm from "./Components.jsx/EmployeeForm";
import ErrorMessage from "./Components.jsx/EmployeeMessage";
import './App.css';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]); // State to hold employee data
  const [editIndex, setEditIndex] = useState(null); // To track which row is being edited
  const [tempEmployee, setTempEmployee] = useState(null); // Temporary storage for the row being edited
  const [error, setError] = useState(""); // To store error messages

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch("https://mocki.io/v1/a6a0fb6b-a84a-4934-b3f2-5c92cc77c44e")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Log data to inspect its structure

        const mappedEmployees = data.map((item) => ({
          firstName: item.first_name || "N/A",
          fullName: `${item.first_name} ${item.last_name}` || "N/A",
          userName: item.username || "N/A",
          maritalStatus: item.marital_status || "N/A",
          employeeStatus: item.status || "N/A",
        }));

        setEmployees(mappedEmployees); // Set employees with mapped data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Delete an employee
  const handleDelete = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  // Start editing an employee
  const handleEdit = (index) => {
    setEditIndex(index);
    setTempEmployee(employees[index]); // Save the current employee details before editing
    setError(""); // Reset error message when editing
  };

  // Save the changes after editing
  const handleSave = (tempEmployee) => {
    if (
      !tempEmployee.firstName ||
      !tempEmployee.fullName ||
      !tempEmployee.userName ||
      !tempEmployee.maritalStatus ||
      !tempEmployee.employeeStatus
    ) {
      setError("All fields must be filled");
      return;
    }

    const updatedEmployees = employees.map((employee, index) =>
      index === editIndex ? tempEmployee : employee
    );
    setEmployees(updatedEmployees);
    setEditIndex(null); // Exit edit mode
    setTempEmployee(null); // Reset temporary employee state
  };

  // Add new employee
  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div>
      <h1>USER LIST PAGE</h1>

      {/* Error Message */}
      {error && <ErrorMessage error={error} />}

      {/* Employee Table */}
      <table border="1" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>First-Name</th>
            <th>Full-Name</th>
            <th>UserName</th>
            <th>Marital-Status</th>
            <th>Employee-Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Existing employees list */}
          {employees.map((employee, index) => (
            <EmployeeRow
              key={index}
              employee={employee}
              isEditing={editIndex === index}
              onEdit={() => handleEdit(index)}
              onDelete={() => handleDelete(index)}
              onSave={(tempEmployee) => handleSave(tempEmployee)}
              onCancel={() => setEditIndex(null)}
              tempEmployee={tempEmployee}
              setTempEmployee={setTempEmployee}
            />
          ))}

          {/* Form row for adding new employee */}
          <EmployeeForm onAdd={handleAddEmployee} />
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
