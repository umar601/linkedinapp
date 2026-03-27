import { useEffect, useState } from "react";
import {getPost} from "../api/post";

export default function DashBoard(){

    let [data,setData] = useState([]);
    let [loading,setLoading] = useState(false)
    let [err,setErr] = useState("");


    async function getData(){


    try{

    setLoading(true)

    let res = await getPost();
    
    // console.log(res)
    setData(res);
    setLoading(false)
    // console.log(loading)

    }catch(err){
        

        setLoading(false)
        setErr("error in fetching posts")
        // console.log("error in fetching",err)
    }

    // console.log(data)
    }

    
    useEffect(()=>{

        getData();
    },[])

    

    return (

        <>
        
        {err?<p>{err}</p>:null}
        {loading?<p>fecthcing posts</p>:null}

        <h1>all posts</h1>

        {data.map((item)=>{

            return (

                <div key={item._id} style={{border:"1px solid black",width:"100vw",display:"flex",justifyContent:"center",flexDirection:"column",margin:"5px"}}>
                    <p>created By {item.createdBy?item.createdBy.username:"annonymus"}</p>
                    <p>post {item.content}</p>
                    <p>likes {item.likes}</p>
                    <p>reposts {item.reposts}</p>
                    <button>comments {item.createdBy?item.createdBy.comments.length:0}</button>
                    <p>created At {item.createdAt}</p>
                </div>
            )
        })}
        
        
        </>
    )
}