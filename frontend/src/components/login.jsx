import {useEffect, useState} from "react";
import { login} from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function UserLogin(){

    let [data,setData] = useState({username:"",password:""});
    let [loading,setLoading] = useState("")
    let [err,setErr] = useState(false);

    let navigate = useNavigate();

    function handleOnChnage(event){

        setData({...data,[event.target.name]:event.target.value})

    }

    async function handleOnSubmit(event) {

        event.preventDefault();

        setLoading(true)

        const res = await login(data)

        if(res == "user not found"){

            setErr(true)
            setData({username:"",password:""})
            setLoading(false)

        }
        else{
        // console.log(res)

        navigate("/dashBoard")

        }
        
        
    }



     function handleButtonClick(event){


        navigate(event.target.value)

    }

   

    return(

    <>

    <button value="/login"onClick={handleButtonClick}>login</button>
    <button value="/signup"onClick={handleButtonClick}>signup</button>

    {err?<p>either password or username is incorrect</p>:null}


    <form onSubmit={handleOnSubmit} >
        
        <input type="text" placeholder="Enter the username" name="username" value={data.username} onChange={handleOnChnage}/>
        <input type="password" placeholder="Enter the password" name="password" value={data.password} onChange={handleOnChnage}/>
        <button type="submit">{loading?"Authenticating":"Log In"}</button>

    </form>

    </>

    )


}