import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_URL,
});

instance.interceptors.response.use(
  (response) => {
    return {
      status: response.status,
      data: response.data,
    };
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

instance.interceptors.request.use((config) => {
  if (localStorage.getItem("authToken")) {
    config.headers.Authorization = `${JSON.parse(
      localStorage.getItem("authToken")
    )}`;
  }
  return config;
});

export default instance;