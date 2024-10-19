import React from "react";

const EmployeeRow = ({
  employee,
  isEditing,
  onEdit,
  onDelete,
  onSave,
  onCancel,
  tempEmployee,
  setTempEmployee,
}) => {
  const handleEditChange = (e) => {
    const updatedEmployee = { ...tempEmployee, [e.target.name]: e.target.value };
    setTempEmployee(updatedEmployee);
  };

  return (
    <tr>
      {/* Editable Row */}
      {isEditing ? (
        <>
          <td>
            <input
              type="text"
              name="firstName"
              value={tempEmployee.firstName}
              onChange={handleEditChange}
              required
            />
          </td>
          <td>
            <input
              type="text"
              name="fullName"
              value={tempEmployee.fullName}
              onChange={handleEditChange}
              required
            />
          </td>
          <td>
            <input
              type="text"
              name="userName"
              value={tempEmployee.userName}
              onChange={handleEditChange}
              required
            />
          </td>
          <td>
            <input
              type="text"
              name="maritalStatus"
              value={tempEmployee.maritalStatus}
              onChange={handleEditChange}
              required
            />
          </td>
          <td>
            <input
              type="text"
              name="employeeStatus"
              value={tempEmployee.employeeStatus}
              onChange={handleEditChange}
              required
            />
          </td>
          <td>
            <button onClick={() => onSave(tempEmployee)}>Save</button>
            <button onClick={onCancel}>Cancel</button>
          </td>
        </>
      ) : (
        <>
          {/* Non-editable Row */}
          <td>{employee.firstName || <span style={{ color: "red" }}>⚠ Empty</span>}</td>
          <td>{employee.fullName || <span style={{ color: "red" }}>⚠ Empty</span>}</td>
          <td>{employee.userName || <span style={{ color: "red" }}>⚠ Empty</span>}</td>
          <td>{employee.maritalStatus || <span style={{ color: "red" }}>⚠ Empty</span>}</td>
          <td>{employee.employeeStatus || <span style={{ color: "red" }}>⚠ Empty</span>}</td>
          <td>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default EmployeeRow;
