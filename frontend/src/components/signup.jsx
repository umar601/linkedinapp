import {useEffect, useState} from "react";
import { signup} from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function UserSignUp(){

    let [data,setData] = useState({username:"",password:""});
    let [loading,setLoading] = useState(false);
    let [userExist,setUserExist] = useState(false);
    let navigate = useNavigate();

    function handleOnChnage(event){

        // console.log("callled")

        setData({...data,[event.target.name]:event.target.value})

    }

    

    async function handleOnSubmit(event) {

        event.preventDefault();

        setLoading(true);
        const res = await signup(data);

        if(res == "user already exist"){

            setUserExist(true);
            setData({username:"",password:""})
            setLoading(false)
        }
        else{

        navigate("/dashBoard")

        // console.log(res)
        }
        
        
    }


    function handleButtonClick(event){
        // console.log(event.target.value)
        navigate(event.target.value)
    }

   

    return(

    <>

    <button  value="/login" onClick={handleButtonClick}>login</button>
    <button value="/signup"onClick={handleButtonClick}>signup</button>


    {userExist?<p>user already exist</p>:null}


    <form onSubmit={handleOnSubmit} >
        
        <input type="text" placeholder="Enter the username" name="username" value={data.username} onChange={handleOnChnage}/>
        <input type="password" placeholder="Enter the password" name="password" value={data.password} onChange={handleOnChnage}/>
        <button type="submit">{loading?"signing In":"sign in"}</button>

    </form>

    </>

    )


}