import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const editData = () => {

    const [oldData,setOldData]=useState({})
    const [editedData,setEditedData]=useState({})
    const router=useRouter()
    const id=router.query.editId
    const getDatabyId=async(id)=>{
        try {
            const resp=await fetch(`http://localhost:8000/api/user/${id}`)
            const data=await resp.json()
            setOldData(data)
        } catch (error) {
            console.log(error);
        }
    }
    const editData=async(id)=>{
        try {
          const resp=await fetch(`http://localhost:8000/api/user/${id}`,
          {
            method:'PATCH',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(editedData)
          }
          )
          const data=await resp.json()
          console.log(data);
          alert('data updated successfully')
          setEditedData(data)
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(()=>{
        getDatabyId(id)
      },[])
  return (
    <div><h1>edit data</h1>

    <input type='text'
    name='Name'
    placeholder={oldData.Name}
      onChange={e=>setEditedData({...oldData,Name:e.target.value})}
    />
    <input type='text'
    name='Address'
    placeholder={oldData.Address}
    onChange={e=>setEditedData({...editedData,Address:e.target.value})}
    />
<button onClick={()=>{editData(id)}}>Submit</button></div>
  )
}

export default editData