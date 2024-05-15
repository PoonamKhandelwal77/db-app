
import Link from 'next/link'
import React, { useState,useEffect } from 'react'

const postAPIPro = () => {
    const [data,setData]=useState([])
    const [newData,setNewData]=useState({})
    
    const getData=async()=>{
      try {
        const resp=await fetch('http://localhost:8000/api/user')
        const data=await resp.json()
        setData(data)
      } catch (error) {
        console.log(error);
      }
  
    }

    const postData=async()=>{
      try {
        const resp=await fetch('http://localhost:8000/api/user',
          {
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(newData)
          }

        )
        const data=await resp.json()
        console.log(data);
        alert('data submitted successfully')
        setNewData(data)
      } catch (error) {
        console.log(error);
      }
    }

    const deleteData=async(id)=>{
      try {
        const resp=await fetch(`http://localhost:8000/api/user/${id}`,
          {
            method:'DELETE'
          }
        )
        const data=await resp.json()
        console.log(data);
        alert('data deleted successfully')
       
      } catch (error) {
        console.log(error);
      }
    }
    const editData=async(id)=>{
      try {
        const resp=await fetch(`http://localhost:8000/api/user/${id}`,
        {
          method:'PUT',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(newData)
        }
        )
        const data=await resp.json()
        console.log(data);
        alert('data submitted successfully')
        setNewData(data)
      } catch (error) {
        console.log(error);
      }
    }
useEffect(()=>{
  getData();
},[data,getData])
  return (
    <div>Post api practice
    
    {
      data.map((el)=>{
        return(
          <div id={el._id}>
           <h1>{el.Name}</h1> 
           <p>{el.Address}</p>
           <Link href={`/postAPIPro/${el._id}`}>edit</Link>
           <button onClick={()=>{deleteData(el._id)}}>delete</button>
          </div>
        )
      })
    }
    

    <input type='text'
    name='Name'
      onChange={e=>setNewData({...newData,Name:e.target.value})}
    />
    <input type='text'
    name='Address'
    onChange={e=>setNewData({...newData,Address:e.target.value})}
    />
<button onClick={postData}>Submit</button>


    </div>
  )
}

export default postAPIPro