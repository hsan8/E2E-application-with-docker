import http from "../http-common";
const getAll = () => {
  return http.get("/getall");
};

const get = (id) => {
  return http.get(`/getbyid/${id}`);
};

const create = (data) => {
  return http.post("/creat", data);
};

const update = (id, data) => {
  return http.put(`/update/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/delete/${id}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default TutorialService;
