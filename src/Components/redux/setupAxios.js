import { refreshAccessToken } from "./authCrud";
import axios from "axios";


// const Axios = axios.create({
//   baseURL: process.env.REACT_APP_USER_UI_API_URL,
 
// });

export default function setupAxios(axios, store,base_url) {


  // axios.interceptors.request.handlers.forEach((element,index) => {
  //   axios.interceptors.request.eject(index);
  // });

  axios.defaults.baseURL =  process.env.REACT_APP_API_URL;

  const refToken = localStorage.getItem("ref_token");
  const postId = localStorage.getItem("postId")
  const sessionId = localStorage.getItem("sessionId")


  // axios.defaults.baseURL = process.env.REACT_APP_AUTH_UI_API_URL;
  // const refToken = localStorage.getItem("ref_token");

  axios.interceptors.request.use(
    async (config) => {
      const authToken = localStorage.getItem("token");
      if (!authToken) {
        config.headers = {
          Authorization: "",
          "accept-language": "en"
        };
      } else {
        config.headers = {
          Authorization: `Bearer ${authToken}`,
          "accept-language": "en",
          'post-id' :`${postId}`,
          'session-id' : `${sessionId}`
        };
      }

      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  // // Response interceptor for API calls
  // if (refToken) {
  //   axios.interceptors.response.use(
  //     (response) => {
  //       return response;
  //     },
  //     async function(error) {
  //       const originalRequest = error.config;
  //       if (error.response.status === 401) {
  //         const access_token = await refreshAccessToken(refToken);
  //         localStorage.setItem("token", access_token.data.access);
  //         axios.defaults.headers.common["Authorization"] =
  //           "Bearer " + access_token;
  //         return axios(originalRequest);
  //       }
  //       return Promise.reject(error);
  //     }
  //   );
  // } else {
  // }
}

// const Axios = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
// })


