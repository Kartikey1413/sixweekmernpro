import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { Link } from 'react-router-dom';


function Myhomepage() {

    const [mydata, setdata] = useState([]);

    const mygetdata = () => {
        axios.get('https://sixweekmernpro.onrender.com/getalldata').then((d) => {
            console.log(d);
            setdata(d.data);
        })
    }

useEffect(()=>{
    mygetdata();
},[])



const deleterecor = async(id)=>{
    await axios.delete(`https://sixweekmernpro.onrender.com/deleteuser/${id}`).then((res)=>{
        console.log(res.data);
        mygetdata();
        });
}





    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <div className="card text-bg-primary mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card text-bg-danger mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card text-bg-info mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card text-bg-primary mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card text-bg-primary mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <input type='button' value="getdata from api" onClick={mygetdata} />
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">sno</th>
                                <th scope="col">Mongodb Id</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">Course</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Gender</th>
                                <th scope="col" width={150}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mydata.map((d,s) => {
                                return (
                                    <tr key={d._id}>
                                        <th scope="row">{++s}</th>
                                        <th>{d._id}</th>
                                        <td>{d.fullname}</td>
                                        <td>{d.email}</td>
                                        <td>{d.course}</td>
                                        <td>{d.dob}</td>
                                        <td>{d.gender}</td>
                                        <td>
                                        <span className="badge text-bg-warning m-2 p-2"><Link to={`edituserpage/`+d._id}><FaEdit/></Link></span>
                                        <span className="badge text-bg-danger m-2 p-2" onClick={()=>deleterecor(d._id)}><MdDeleteSweep/></span>
                                        <span className="badge text-bg-info m-2 p-2"><Link to={`view/`+d._id}><GrFormView/></Link></span>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>

                </div>
            </div>



        </div>
    )
}

export default Myhomepage