import axios from "axios";

console.log("hi");
console.log("backend url",import.meta.env.VITE_BACKENDURL);

const axiosInstance = axios.create({
    baseURL : import.meta.env.VITE_BACKENDURL,
    headers : {
        'Content-Type' : 'application/json'
    }
});
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;