import axiosInsatnce from "./axiosInstance";
export async function getPost(){

    try{
    let res = await axiosInsatnce.get("/post");
    return res.data;

    }catch(err){
        throw err;
    }
}