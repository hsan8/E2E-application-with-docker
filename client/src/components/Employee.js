import React, { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
import { ToastContainer, toast } from "react-toastify";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
const Employee = (props) => {
  const initialEmployeeState = {
    name: "",
    phone: "",
    email: "",
    address: "",
    postalZip: "",
    region: "",
    country: "",
    list: "",
    text: "",
    numberrange: "",
  };
  const [currentEmployee, setcurrentEmployee] = useState(initialEmployeeState);

  const getEmployee = (id) => {
    EmployeeService.get(id)
      .then((response) => {
        setcurrentEmployee(response.data.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getEmployee(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setcurrentEmployee({ ...currentEmployee, [name]: value });
  };
  const updateEmployee = () => {
    EmployeeService.update(currentEmployee._id, currentEmployee)
      .then((response) => {
        console.log(response.data);
        toast("The Employee was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteEmployee = () => {
    EmployeeService.remove(currentEmployee._id)
      .then((response) => {
        console.log(response.data);
        props.history.push("/employees");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {currentEmployee ? (
        <div className="edit-form">
          <h4>Employee</h4>
          <Box>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="name">Name</InputLabel>
              <OutlinedInput id="name" name="name" onChange={handleInputChange} label="name" value={currentEmployee.name} />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="phone">Phone</InputLabel>
              <OutlinedInput id="phone" name="phone" onChange={handleInputChange} label="phone" value={currentEmployee.phone} />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="email">E-mail</InputLabel>
              <OutlinedInput id="email" name="email" onChange={handleInputChange} label="email" value={currentEmployee.email} />
            </FormControl>{" "}
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="address">Address</InputLabel>
              <OutlinedInput id="address" name="address" onChange={handleInputChange} label="address" value={currentEmployee.address} />
            </FormControl>{" "}
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="postalZip">Postal Zip</InputLabel>
              <OutlinedInput id="postalZip" name="postalZip" onChange={handleInputChange} label="postalZip" value={currentEmployee.postalZip} />
            </FormControl>{" "}
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="region">Region</InputLabel>
              <OutlinedInput id="region" name="region" onChange={handleInputChange} label="region" value={currentEmployee.region} />
            </FormControl>{" "}
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="country">Country</InputLabel>
              <OutlinedInput id="country" name="country" onChange={handleInputChange} label="country" value={currentEmployee.country} />
            </FormControl>{" "}
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="list">list</InputLabel>
              <OutlinedInput id="list" name="list" onChange={handleInputChange} label="list" value={currentEmployee.list} />
            </FormControl>{" "}
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="text">text</InputLabel>
              <OutlinedInput id="text" name="text" onChange={handleInputChange} label="text" value={currentEmployee.text} />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="numberrange">numberrange</InputLabel>
              <OutlinedInput
                id="numberrange"
                name="numberrange"
                onChange={handleInputChange}
                label="numberrange"
                value={currentEmployee.numberrange}
              />
            </FormControl>
          </Box>
          <button className="badge badge-danger mr-2" onClick={deleteEmployee}>
            Delete
          </button>
          <button type="submit" className="badge badge-success" onClick={updateEmployee}>
            Update
          </button>
          <p>[Joined in: {currentEmployee.createdAt}]</p>
          <p>[Updated at: {currentEmployee.updatedAt}]</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Employee...</p>
        </div>
      )}
    </div>
  );
};

export default Employee;
