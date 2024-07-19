import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function Detailspage() {
const {id}=useParams();

const [single,singlebind]=useState({})

const getDetailsuser = ()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((d) => {
        singlebind(d.data);
    })  
}

useEffect(()=>{
    getDetailsuser();
},[])

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                    <h1>Details page <Link to="/dashboard" className='btn btn-info'>Back</Link></h1>
                    <hr/>
                    <h1>{single.id}</h1>
                    <h1>{single.userId}</h1>
                    <h3>Title: {single.title}</h3>
                    <h5>{single.body}</h5>
            </div>
        </div>
    </div>
  )
}

export default Detailspage