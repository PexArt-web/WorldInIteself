const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const fetchFromAPI = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Network response was not ok");
    }
    return data;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};

export const getGoodMorning = () => fetchFromAPI("/good-morning");
export const getGoodNight = () => fetchFromAPI("/good-night");
export const getLoveLetters = () => fetchFromAPI("/love-letters");
export const getMotivation = () => fetchFromAPI("/motivation");
export const getPoems = () => fetchFromAPI("/poems");
export const getMotherHood = () => fetchFromAPI("/mother-hood");
export const getFatherHood = () => fetchFromAPI("/father-hood");
export const getBirthday = () => fetchFromAPI("/birthday");

