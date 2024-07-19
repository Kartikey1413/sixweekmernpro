import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Myregistorpage() {
    const { register, handleSubmit,formState: { errors }} = useForm();

const mysubmit = (e)=>{
            console.log(e);
}


    return (
        <form onSubmit={handleSubmit(mysubmit)}>
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
                                    <input type="email" className="form-control" {...register("email",{required:true})} name='email'/>
                                    {errors.email && <p className='text-danger'>email is  required</p>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">FullName</label>
                                    <input type="text" className="form-control" {...register("fullname",{required:true,minLength:5})} name='fullname'/>
                                    {/* {errors.fullname && <p className='text-danger'>full name is required</p>} */}
                                    {errors.fullname?.type==='required' && <p className='text-danger'>full name is required</p>}
                                    {errors.fullname?.type==='minLength' && <p className='text-danger'>minimum length 5 required</p>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">DOB</label>
                                    <input type="date" className="form-control" {...register("dob")} name='dob'/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                <label className="form-label">Gender</label><br/>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="male" {...register("gender")}/>
                                        <label className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="female" {...register("gender")}/>
                                        <label className="form-check-label">Female</label>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Course</label>
                                    <select className='form-select' {...register("course")}>
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
                                    <input type="password" className="form-control" {...register("pass")} name='pass'/>
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <div className="mb-3">

                                    <input type="submit" className="btn btn-success" value="login" />
                                    <input type="button" className="btn btn-danger ms-3" value="cancel" />
                                    <Link to="/">back to login</Link>
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