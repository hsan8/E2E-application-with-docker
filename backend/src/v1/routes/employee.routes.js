const express = require("express");
const router = express.Router();
const { creat, getAll, getById, update, deleteEmp } = require("../controller/employee.controller");
router.post("/creat", creat);
router.get("/getall/", getAll);
router.get("/getbyid/:id", getById);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteEmp);
module.exports = router;
