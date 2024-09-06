import axios from "axios";

const API_URL = "http://localhost:3000/api/boats";

export const fetchBoats = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching boats:", error);
    throw error;
  }
};

export const createBoat = async (boat) => {
  try {
    const response = await axios.post(API_URL, boat);
    return response.data;
  } catch (error) {
    console.error("Error creating boat:", error);
    throw error;
  }
};

export const deleteBoat = async (boatId) => {
  try {
    await axios.delete(`${API_URL}/${boatId}`);
  } catch (error) {
    console.error("Error deleting boat:", error);
    throw error;
  }
};

export const updateBoat = async (boatId, updatedData) => {
  try {
    await axios.put(`${API_URL}/${boatId}`, updatedData);
  } catch (error) {
    console.error("Error updating boat:", error);
    throw error;
  }
};
