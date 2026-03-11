import {useState} from "react";
import { signup} from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function UserSignUp(){

    let [data,setData] = useState({username:"",password:""});
    let navigate = useNavigate();

    function handleOnChnage(event){

        // console.log("callled")

        setData({...data,[event.target.name]:event.target.value})

    }

    async function handleOnSubmit(event) {

        event.preventDefault();
        // console.log(typeof(login))
        // console.log("submit  called")

        const res = await signup(data)

        console.log(res)
        
        
    }

    function onLoginButtonClick(){

        // setLoginClick(true)

        navigate("/")

    }

     function onSignUpButtonClick(){

        // setSignClick(true)

        navigate("/signup")

    }

    function handleButtonClick(event){
        // console.log(event.target.value)
        navigate(event.target.value)
    }

   

    return(

    <>

    <button  value="/" onClick={handleButtonClick}>login</button>
    <button value="/signup"onClick={handleButtonClick}>signup</button>


    <form onSubmit={handleOnSubmit} >
        
        <input type="text" placeholder="Enter the username" name="username" value={data.username} onChange={handleOnChnage}/>
        <input type="password" placeholder="Enter the password" name="password" value={data.password} onChange={handleOnChnage}/>
        <button type="submit">Signup</button>

    </form>

    </>

    )


}