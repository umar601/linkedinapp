import axiosInstance from "./axiosInstance";

export const login = async (data) => {
  try {
    const res = await axiosInstance.post("/login",data);
    return res.data;
  } catch (error) {
    
    return error;
  }
};

export const signup = async (data) => {
  try {
    const res = await axiosInstance.post("/signup",data);
    return res.data;
  } catch (error) {
    return error;
  }
};
