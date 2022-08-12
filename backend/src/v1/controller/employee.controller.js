const { newEmployee, getAllEmployee, getEmployeeById, updateEmployeeDetails, deleteEmployee } = require("../service/employee.service");
const Employee = require("../model/employee.model");
class employeeController {
  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @returns
   */
  static async creat(req, res) {
    const emp = new Employee(req.body);
    const response = await newEmployee(emp);
    return response.status == "success" ? res.status(200).send({ data: response.message }) : res.status(400).send({ error: response.message });
  }
  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @returns
   */
  static async getAll(req, res) {
    const { page } = req.query;
    const response = await getAllEmployee(Employee, page);
    return response.status == "success" ? res.status(200).send({ data: response.message }) : res.status(400).send({ error: response.message });
  }
  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @returns
   */
  static async getById(req, res) {
    try {
      const response = await getEmployeeById(Employee, req.params.id);
      return response.status == "success" ? res.status(200).send({ data: response.message }) : res.status(400).send({ error: response.message });
    } catch (error) {
      return res.status(500).send({ error: "error found during this request" });
    }
  }

  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @returns
   */
  static async update(req, res) {
    try {
      const id = { _id: req.params.id };
      const payload = req.body;
      const response = await updateEmployeeDetails(Employee, id, payload);
      return response.status == "success" ? res.status(200).send({ data: response.message }) : res.status(400).send({ error: response.message });
    } catch (error) {
      return res.status(200).send({ error: "error found during this request" });
    }
  }
  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @returns
   */
  static async deleteEmp(req, res) {
    try {
      const response = await deleteEmployee(Employee, req.params.id);
      return response.status == "success" ? res.status(200).send({ data: "deleted" }) : res.status(400).send({ error: response.message });
    } catch (error) {
      return res.status(500).send({ error: "error found during this request" });
    }
  }
}
module.exports = employeeController;
