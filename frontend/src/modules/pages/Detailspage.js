import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";


function Detailspage() {
const {id}=useParams();

const [single,singlebind]=useState({})

const getDetailsuser = ()=>{
    axios.get(`http://localhost:8700/view/${id}`).then((d) => {
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
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">sno</th>
                                <th scope="col">Mongodb Id</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">Course</th>
                                <th scope="col">DOB</th>
                                <th scope="col" width={150}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                         
                                    <tr key={single._id}>
                                        <th scope="row">{}</th>
                                        <th>{single._id}</th>
                                        <td>{single.fullname}</td>
                                        <td>{single.email}</td>
                                        <td>{single.course}</td>
                                        <td>{single.dob}</td>
                                        <td>
                                        <span className="badge text-bg-warning m-2 p-2"><FaEdit/></span>
                                        </td>
                                    </tr>
                        

                        </tbody>
                    </table>
            </div>
        </div>
    </div>
  )
}

export default Detailspage