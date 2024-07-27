// services/addCamp.js
import axios from "axios";

const API_BASE_URL = "/api/camp/create";

export const addCamp = async (campData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}`, campData);
    return response.data;
  } catch (error) {
    console.error("Error adding camp:", error);
    throw error;
  }
};
