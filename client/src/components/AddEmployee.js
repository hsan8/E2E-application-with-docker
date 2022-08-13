import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import Typography from "@mui/material/Typography";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import employeeService from "../services/EmployeeService";

export default function InputAdornments() {
  const [values, setValues] = React.useState({
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
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    employeeService.create(values).then((data) => {
      toast("User added");
      values = {};
      console.log(data);
    });
    console.log("You clicked submit.");
  };
  return (
    <>
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
      {/* Same as */}
      <ToastContainer />
      <Typography variant="h2" gutterBottom component="div">
        Employee Form:
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
          <OutlinedInput id="outlined-adornment-amount" onChange={handleChange("name")} label="name" />
        </FormControl>{" "}
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Phone</InputLabel>
          <OutlinedInput id="outlined-adornment-amount" onChange={handleChange("phone")} label="phone" />
        </FormControl>{" "}
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
          <OutlinedInput id="outlined-adornment-amount" onChange={handleChange("email")} label="email" />
        </FormControl>{" "}
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Address</InputLabel>
          <OutlinedInput id="outlined-adornment-amount" onChange={handleChange("address")} label="address" />
        </FormControl>{" "}
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Postal Zip</InputLabel>
          <OutlinedInput id="outlined-adornment-amount" onChange={handleChange("postalZip")} label="postalZip" />
        </FormControl>{" "}
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Region</InputLabel>
          <OutlinedInput id="outlined-adornment-amount" onChange={handleChange("region")} label="region" />
        </FormControl>{" "}
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Country</InputLabel>
          <OutlinedInput id="outlined-adornment-amount" onChange={handleChange("country")} label="country" />
        </FormControl>{" "}
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">List</InputLabel>
          <OutlinedInput id="outlined-adornment-amount" onChange={handleChange("list")} label="list" />
        </FormControl>{" "}
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Text</InputLabel>
          <OutlinedInput id="outlined-adornment-amount" onChange={handleChange("text")} label="text" />
        </FormControl>{" "}
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Number range</InputLabel>
          <OutlinedInput id="outlined-adornment-amount" onChange={handleChange("numberrange")} label="numberrange" />
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", float: "left" }}>
        <center>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" endIcon={<SaveAsIcon />} onClick={handleSubmit}>
              Save
            </Button>
          </Stack>
        </center>
      </Box>
    </>
  );
}
