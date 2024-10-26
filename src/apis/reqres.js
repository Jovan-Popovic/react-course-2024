import axios from "axios";

const reqresApi = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
});

reqresApi.interceptors.request.use(request => {
  request.headers.Authorization = "Token";
  console.log(request);
  return request;
});

reqresApi.interceptors.response.use(response => {
  console.log(response);

  return response;
});

export const callReqresApi = async (route, data, method = "get") => {
  const response = await reqresApi(route, { method, data });

  return response.data;
};
