import axios from "axios";

const Instance = axios.create({
  baseURL: "https://afternoon-dawn-41697.herokuapp.com/api/",
});

export default Instance;
