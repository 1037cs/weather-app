import axios from "axios";

const options = {
  headers: {
    "X-RapidAPI-Key": "160f3b2274msh30958dca6edb72ap1f2361jsnd392458ef929",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

export const getCities = async (word: string) => {
  try {
    const location = await axios.get(
      `${GEO_API_URL}?namePrefix=${word}&minPopulation=1000&limit=10`,
      options
    );
    return location.data;
  } catch (e) {
    console.log(e);
  }
};
