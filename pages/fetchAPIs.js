import React, { useEffect, useState } from 'react'
import index from './express-conn'

const fetchAPIs = () => {
    const url='https://dummyjson.com/products'
    const [data,setData]=useState({})
    const fetchinfo=async()=>{
        return fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => {
            // console.log(res);
            setData(res.products)
            return res;
        })
       
    }
    useEffect(()=>{
        fetchinfo();
        console.log(data);
    },[])
    return(
        <>
            <h1> fetch api</h1>
            {
               
            }
        </>
    )
}

export default fetchAPIs