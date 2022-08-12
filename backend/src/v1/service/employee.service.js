class employeeController {
  /**
   *
   * @param {Employee} emp
   * @returns
   */
  static async newEmployee(emp) {
    try {
      const result = await emp.save();
      return { status: "success", message: result };
    } catch (error) {
      return { status: "failed", message: error };
    }
  }
  /**
   *
   * @param {Employee} emp
   * @param {Number} page
   * @param {String} name
   * @returns
   */
  static async getAllEmployee(emp, page) {
    try {
      let result;
      let limit = 10;
      !page ? (page = 1) : (page = page);
      const skip = (page - 1) * limit;
      result = await emp.find({}).skip(skip).limit(limit);

      return { status: "success", message: result };
    } catch (error) {
      return { status: "failed", message: error };
    }
  }
  /**
   *
   * @param {Employee} emp
   * @param {String} id
   * @returns
   */
  static async getEmployeeById(emp, id) {
    try {
      const result = await emp.find({ _id: id });
      return { status: "success", message: result };
    } catch (error) {
      return { status: "failed", message: error };
    }
  }
  /**
   *
   * @param {Employee} emp
   * @param {String} id
   * @param {Object} playload
   * @returns
   */
  static async updateEmployeeDetails(emp, id, payload) {
    try {
      const result = await emp.findOneAndUpdate(id, { ...payload });
      return { status: "success", message: result };
    } catch (error) {
      return { status: "failed", message: error };
    }
  }
  /**
   *
   * @param {Employee} emp
   * @param {String} id
   * @returns
   */
  static async deleteEmployee(emp, id) {
    try {
      const result = await emp.findOneAndRemove({ _id: id });
      console.log(result);
      return { status: "success", message: result };
    } catch (error) {
      return { status: "failed", message: error };
    }
  }
}
module.exports = employeeController;
