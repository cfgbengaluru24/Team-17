import axios from "axios";
const baseURL = "/api/addPatient";

const addPatient = async (patientDetails) => {
  const response = await axios.post(baseURL, patientDetails);
  return response.data;
};

export default addPatient;
