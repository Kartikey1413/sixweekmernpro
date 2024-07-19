import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { Link } from 'react-router-dom';


function Myhomepage() {

    const [mydata, setdata] = useState([]);

    const mygetdata = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((d) => {
            // console.log(d);
            setdata(d.data)
        })
    }

useEffect(()=>{
    mygetdata();
},[])



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
                                <th scope="col">id</th>
                                <th scope="col">userid</th>
                                <th scope="col">title</th>
                                <th scope="col">body text</th>
                                <th scope="col" width={150}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mydata.map((d) => {
                                return (
                                    <tr key={d.id}>
                                        <th scope="row">{d.id}</th>
                                        <td>{d.userId}</td>
                                        <td>{d.title}</td>
                                        <td>{d.body}</td>
                                        <td>
                                        <span className="badge text-bg-warning m-2 p-2"><FaEdit/></span>
                                        <span className="badge text-bg-danger m-2 p-2"><MdDeleteSweep/></span>
                                        <span className="badge text-bg-info m-2 p-2"><Link to={`view/`+d.id}><GrFormView/></Link></span>
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