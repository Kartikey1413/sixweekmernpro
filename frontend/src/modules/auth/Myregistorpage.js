import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


function Myregistorpage() {
    const { register, handleSubmit,formState: { errors }} = useForm();

    const navigat = useNavigate();


const [x,y]=useState({
    email:"",
    fullname:"",
    dob:"",
    gender:"",
    pass:"",
    course:"",
})

const mysubmit = async()=>{
    const { fullname, email, gender,pass,dob,course } = x;
    const res = await fetch("http://localhost:8700/registorpage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            fullname, email, gender,pass,dob,course
        })
        
    });
    const data = await res.json();
    console.log(data);
    alert("welcome to regis");
    navigat('/');

   
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




    return (
        <form>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8 p-3 bg-light shadow">
                    <div className="container-fluid">
                        <div className="row">
                            <div className='col-12 text-center'>
                                <h1>New Registor Page</h1>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" {...register("email",{required:true})} name='email' value={x.email} onInput={setdata}/>
                                    {errors.email && <p className='text-danger'>email is  required</p>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">FullName</label>
                                    <input type="text" className="form-control" {...register("fullname",{required:true,minLength:5})} name='fullname' value={x.fullname} onInput={setdata}/>
                                    {/* {errors.fullname && <p className='text-danger'>full name is required</p>} */}
                                    {errors.fullname?.type==='required' && <p className='text-danger'>full name is required</p>}
                                    {errors.fullname?.type==='minLength' && <p className='text-danger'>minimum length 5 required</p>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">DOB</label>
                                    <input type="date" className="form-control" {...register("dob")} name='dob' value={x.dob} onChange={setdata}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                <label className="form-label">Gender</label><br/>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="male" {...register("gender")} onInput={setdata}/>
                                        <label className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="female" {...register("gender")} onInput={setdata}/>
                                        <label className="form-check-label">Female</label>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Course</label>
                                    <select className='form-select' {...register("course")} name='course' value={x.course} onChange={setdata}>
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
                                    <input type="password" className="form-control" {...register("pass")} name='pass' value={x.pass} onInput={setdata}/>
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <div className="mb-3">

                                    <input type="button" className="btn btn-success" value="login" onClick={mysubmit} />
                                    <input type="button" className="btn btn-danger ms-3" value="cancel" />
                                    
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

export default Myregistorpage