import axios from "axios";

export const fetchData = async () => {
  //   const response = axios.get("https://shoes-collections.p.rapidapi.com/shoes");
  //   console.log(response.data);
  //   return response;

  const options = {
    method: "GET",
    url: "https://shoes-collections.p.rapidapi.com/shoes",
    headers: {
      "X-RapidAPI-Key": "b87796b6c3msh568b4d90df2d398p138770jsn17d7a6d85e41",
      "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com",
    },
  };
  await axios
    .request(options)
    .then((res) => res)
    .catch((error) => console.log(error));
};
