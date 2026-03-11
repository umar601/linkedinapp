import {useEffect, useState} from "react";
import { login} from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function UserLogin(){

    let [data,setData] = useState({username:"",password:""});
    let [loginclick,setLoginClick] = useState(false)
    let [signclick,setSignClick] = useState(false)
    let navigate = useNavigate();

    function handleOnChnage(event){

        // console.log("callled")

        setData({...data,[event.target.name]:event.target.value})

    }

    async function handleOnSubmit(event) {

        event.preventDefault();
        // console.log(typeof(login))
        // console.log("submit  called")

        const res = await login(data)

        console.log(res)

        navigate("/DashBoard")
        
        
    }

    function onLoginButtonClick(){

        setLoginClick(true)

        navigate("/")

    }

     function onSignUpButtonClick(){

        setSignClick(true)

        navigate("/signup")

    }

   

    return(

    <>

    <button onClick={onLoginButtonClick}>login</button>
    <button onClick={onSignUpButtonClick}>signup</button>


    <form onSubmit={handleOnSubmit} >
        
        <input type="text" placeholder="Enter the username" name="username" value={data.username} onChange={handleOnChnage}/>
        <input type="password" placeholder="Enter the password" name="password" value={data.password} onChange={handleOnChnage}/>
        <button type="submit">Login</button>

    </form>

    </>

    )


}