import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import EmployeeDataService from "../services/EmployeeService";
import { NavLink } from "react-router-dom";
const columns = [
  { field: "_id", headerName: "ID", hide: true },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  { field: "email", headerName: "Email", width: 270 },
  { field: "address", headerName: "Address", width: 270 },
  { field: "region", headerName: "Region", width: 150 },
  {
    field: "Settings",
    headerName: "",
    width: 200,
    renderCell: (params) => (
      <NavLink to={`/employees/${params.row._id}`} className={(isActive) => "nav-link" + (!isActive ? " unselected" : "")}>
        Edit
      </NavLink>
    ),
  },
];
const DataTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    EmployeeDataService.getAll().then((response) => {
      setTableData([]);
      setTableData(response.data.data);
    });
  }, []);

  return (
    <>
      <div style={{ height: 700, width: "100%" }}>
        <DataGrid getRowId={(row) => row._id} rows={tableData} columns={columns} pageSize={10} />
      </div>
    </>
  );
};

export default DataTable;
