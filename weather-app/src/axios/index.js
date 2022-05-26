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
  (err) => Promise.reject(err)
)

instance.interceptors.request.use((config) =>  config);

export default instance;