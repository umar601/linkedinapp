import {getPost} from "../api/post";

export default function DashBoard(){


    async function getData(){


    const res = await getPost();

    // console.log("from react ",res)


    }

    

    return (

        <>

        <h1>all posts</h1>
        <button onClick={getData}>click</button>
        
        </>
    )
}