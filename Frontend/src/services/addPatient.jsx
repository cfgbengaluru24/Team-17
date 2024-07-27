import axios from "axios";
const baseURL = "http://localhost:3000/api/beneficiary/create";

const addPatient = async (patientDetails) => {
  const response = await axios.post(baseURL, patientDetails);
  return response.data;
};

export default addPatient;
