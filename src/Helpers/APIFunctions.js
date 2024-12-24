import axiosInstance from "./AxiosSetup";

export const registerUser = async (userData) =>{
    console.log("hi")
    console.log(userData);
    return await axiosInstance.post('/signup',userData);
};

export const loginUser = async (credentials) =>{
    console.log("hi")
    console.log(credentials);
    return await axiosInstance.post('/login',credentials);
};


