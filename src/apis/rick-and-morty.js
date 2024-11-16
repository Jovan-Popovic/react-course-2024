import axios from "axios";

const rickAndMortyApi = axios.create({
  baseURL: import.meta.env.RICK_AND_MORTY_BASE_URL,
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
});

rickAndMortyApi.interceptors.request.use(request => {
  request.headers.Authorization = "Token";
  console.log(request);
  return request;
});

rickAndMortyApi.interceptors.response.use(response => {
  console.log(response);

  return response;
});

export const callRickAndMortyApi = async (route, method = "get") => {
  const response = await rickAndMortyApi(route, { method });

  return response.data;
};
