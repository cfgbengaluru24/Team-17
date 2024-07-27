<<<<<<< HEAD
const AddPatient = () => {
  return <>
  </>;
=======
import axios from "axios";
const baseURL = "/api/addPatient";

const addPatient = async (patientDetails) => {
  const response = await axios.post(baseURL, patientDetails);
  return response.data;
>>>>>>> 1236132507f3a0c227457ce843768786a3072424
};

export default addPatient;
