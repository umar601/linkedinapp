import axiosInsatnce from "./axiosInstance";
export async function getPost(){

    try{
    await axiosInsatnce.get("/post");
    return res.data;

    }catch(err){
        throw err;
    }
}