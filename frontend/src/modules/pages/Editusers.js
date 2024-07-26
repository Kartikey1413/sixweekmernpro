import React, { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function Edituser() {
    const navigat = useNavigate();
    const {id} = useParams();
const [x,y]=useState({
    email:"",
    fullname:"",
    dob:"",
    gender:"",
    pass:"",
    course:"",
})

const edituser = async()=>{
    const { fullname, email, gender,pass,dob,course } = x;
    const res = await fetch(`http://localhost:8700/updateuser/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            fullname, email, gender,pass,dob,course
        })
    });
    const data = await res.json();
    console.log(data);
    alert("change successfull");
    navigat('/dashboard');
}

const setdata = (e)=>{
    console.log(e.target.value)
    const {name,value} = e.target;
    y((preval)=>{
      return{
        ...preval,
        [name]:value
      }
    })
  }

const getsingleuser =()=>{
    axios.get(`http://localhost:8700/view/${id}`).then((d) => {
        console.log(d.data);
        y(d.data);
    }) 

}

useEffect(()=>{
    getsingleuser();
},[])







    return (
        <form>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8 p-3 bg-light shadow">
                    <div className="container-fluid">
                        <div className="row">
                            <div className='col-12 text-center'>
                                <h1>User Edit Details Page</h1>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" name='email' value={x.email} onInput={setdata}/>
                                    
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">FullName</label>
                                    <input type="text" className="form-control" name='fullname' value={x.fullname} onInput={setdata}/>
                                   
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">DOB</label>
                                    <input type="date" className="form-control" name='dob' value={x.dob} onChange={setdata}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                <label className="form-label">Gender</label><br/>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="male" checked={x.gender==="male" ? true: false} onInput={setdata}/>
                                        <label className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="female" checked={x.gender==="female" ? true: false} onInput={setdata}/>
                                        <label className="form-check-label">Female</label>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Course</label>
                                    <select className='form-select' value={x.course} onChange={setdata} name='course'>
                                        <option>Mern</option>
                                        <option>excel</option>
                                        <option>java</option>
                                        <option>mongodb</option>
                                        <option>express</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">password</label>
                                    <input type="password" className="form-control" value={x.pass} onInput={setdata}/>
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <div className="mb-3">

                                    <input type="button" className="btn btn-success" value="Update" onClick={edituser} />
                                    <input type="button" className="btn btn-danger ms-3" value="cancel"/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}

export default Edituser