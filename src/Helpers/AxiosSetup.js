import axios from "axios";

console.log("hi");

const axiosInstance = axios.create({
    baseURL : 'https://sign-in-up-backend.onrender.com',
    headers : {
        'Content-Type' : 'application/json'
    }
});
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;