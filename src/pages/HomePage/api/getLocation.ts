import axios from "axios";

export const getLocation = async () => {
  try {
    const location = await axios.get("https://ipapi.co/json");
    return location.data;
  } catch (e) {
    console.log(e);
  }
};
