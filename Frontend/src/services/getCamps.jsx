import axios from "axios";
const baseURL = "/api/camps";

const getCamps = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

export default getCamps;
