import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Myloginpage() {


    const navigat = useNavigate();

    const [x, y] = useState({
        email: "",
        pass: ""
    });

    const setdata = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target;
        y((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    };


    const mylogin = async () => {
        const { email, pass } = x;
        const res = await fetch("http://localhost:8700/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email, pass
            })

        });
        const data = await res.json();
        console.log(data.status);
        if (data.status == 201) {
            alert("welcome to site");
            navigat('/dashboard');
        }
        if (data.status == 422) {
            alert("username and password is blank");
        }
        if (data.status == 478) {
            alert("user not found in  database");
        }
        if (data.status == 250) {
            alert("Password Not Match");
        }






    }



    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-5 p-3 bg-light shadow">
                    <div className="container-fluid">

                        <div className="row">
                            <div className='col-12 text-center'>
                                <h1>Login Page</h1>
                            </div>
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" name='email' onChange={setdata} value={x.email} />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-label">password</label>
                                    <input type="password" className="form-control" name='pass' onChange={setdata} value={x.pass} />
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <div className="mb-3">

                                    <input type="button" className="btn btn-success" value="login" onClick={mylogin} />
                                    <input type="button" className="btn btn-danger ms-3" value="cancel" />
                                    <Link to="registor">Registor Now</Link>
                                    {/* <Link to="dashboard">Dashboard</Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myloginpage