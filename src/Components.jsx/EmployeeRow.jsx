import React from "react";


const EmployeeRow = ({
  employee,
  isEditing,
  handleEdit,
  handleSave,
  handleDelete,
  tempEmployee,
  setTempEmployee,
}) => {
  const rowStyle = employee.isFounder === "Y" ? { backgroundColor: "red" } : {};

  const handleEditChange = (e) => {
    setTempEmployee({ ...tempEmployee, [e.target.name]: e.target.value });
  };

  return (
    <tr style={rowStyle}>
      {isEditing ? (
        <>
          <td>
            <input
              type="text"
              name="firstName"
              value={tempEmployee.firstName}
              onChange={handleEditChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="fullName"
              value={tempEmployee.fullName}
              onChange={handleEditChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="userName"
              value={tempEmployee.userName}
              onChange={handleEditChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="maritalStatus"
              value={tempEmployee.maritalStatus}
              onChange={handleEditChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="employeeStatus"
              value={tempEmployee.employeeStatus}
              onChange={handleEditChange}
            />
          </td>
          <td>
            <select
              name="isFounder"
              value={tempEmployee.isFounder}
              onChange={handleEditChange}
            >
              <option value="N">Not Founder</option>
              <option value="Y">Founder</option>
            </select>
          </td>
          <td>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleEdit}>Cancel</button>
          </td>
        </>
      ) : (
        <>
          <td>{employee.firstName}</td>
          <td>{employee.fullName}</td>
          <td>{employee.userName}</td>
          <td>{employee.maritalStatus}</td>
          <td>{employee.employeeStatus}</td>
          <td>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default EmployeeRow;
