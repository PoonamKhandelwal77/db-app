import React from 'react'

const index = ({data}) => {
  return (
    <div><h1>Available data</h1>
        {
            data.map((el,index)=>{
                return(
                    <div key={index}>
                        <p>{el.Name}</p>
                    </div>
                )
            })
        }
       
    </div>
  )
}

export default index

export async function getServerSideProps(){
const response=await fetch('http://localhost:8000/')
const data=await response.json();
// console.log(data);
    return{
        props:{data}
    }
}