import { useEffect, useState } from "react";
import {getPost} from "../api/post";

export default function DashBoard(){

    let [data,setData] = useState([]);
    let [loading,setLoading] = useState(false)
    let [err,setErr] = useState("");
    let [comment,setComment] = useState([])
    let [commentField,setCommentField] = useState(false);


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

    async function handleComments(commentfromPost){

         setCommentField(true)

        if(commentfromPost.length>0){
        setComment([...commentfromPost])

        }

    }

    
    useEffect(()=>{

        getData();
    },[])

    

    return (

        <>
        
        {err?<p>{err}</p>:null}
        {loading?<p>fecthcing posts</p>:null}

        <h1>all posts</h1>

        <>
        {comment.length>0?
        comment.map((commentItem,index)=>{
            return(

            
                
                <div key={index}>
                    {commentItem.user?<p>user {commentItem.user.username}</p>:"ann"}
                    <p>comment {commentItem.content}</p>
                    <p>created at {commentItem.createdAt.slice(0,10)}</p>
                    <p>likes {commentItem.likes}</p>

                </div>
                
            )

        

        })
        :"no comments yet"}

        {commentField? <form>
            <input placeholder="enter comment"></input>
            <button>submit</button>
         </form>:null}
        </>


        {data.map((item)=>{

            return (

                <div key={item._id} style={{border:"1px solid black",width:"100vw",display:"flex",justifyContent:"center",flexDirection:"column",margin:"5px"}}>
                    <p>created By {item.createdBy?item.createdBy.username:"annonymus"}</p>
                    <p>post {item.content}</p>
                    <p>likes {item.likes}</p>
                    <p>reposts {item.reposts}</p>
                    <button onClick={()=>{handleComments(item.comments)}}>comments {item.comments?item.comments.length:0}</button>
                    <p>created At {item.createdAt.slice(0,10)}</p>
                </div>
            )
        })}
        
        
        </>
    )
}