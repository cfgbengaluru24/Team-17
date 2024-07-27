// services/addCamp.js
import axios from 'axios';


export const addCamp = async (campData) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/beneficiary/create",
      campData
    );
    return response.data;
  } catch (error) {
    console.error('Error adding camp:', error);
    throw error; 
  }
};
