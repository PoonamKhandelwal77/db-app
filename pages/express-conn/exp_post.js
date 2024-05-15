import React, { useState, useEffect } from 'react'

const exp_post = ({data}) => {
    const [newData,setNewData]=useState({})
const postData=async()=>{
    const response=await fetch('http://localhost:8000/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newData)
        })
        const data=await response.json();
        console.log(data);
        setNewData(data)
}

   
  return (
    <div>exp_post
    <form method='post'>
        <input type='text' name='Name' value={'deeva'} onChange={(e)=>setNewData({...newData,Name:e.target.value})}/>
        <input type='text' name='Address' value={'khategaon'} onChange={(e)=>setNewData({...newData,Address:e.target.value})}/>
<button onClick={postData}>submit</button>
    </form>
    <p>{data?data.Name:'error'}</p>
    </div>
  )
}

export default exp_post

// export async function getServerSideProps(req,res){
// console.log(req.body);
//     if(req.method=='post')
//     {
//         const response=await fetch('http://localhost:8000/',{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify(req.body)
//         })
//         const data=await response.json();
//     // console.log(data);
//         return{
//             props:{data}
//         }
//     }
//     return{
//         props:{message:"error"}
//     }

//     }