import axios from "axios";

console.log("hi");
console.log("backend url",import.meta.env.VITE_BACKEND_URL);

const axiosInstance = axios.create({
    baseURL : import.meta.env.VITE_BACKEND_URL,
    headers : {
        'Content-Type' : 'application/json'
    }
});
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;