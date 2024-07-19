import React from 'react'
import { Link } from 'react-router-dom'

function Myloginpage() {
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
                            <input type="email" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label className="form-label">password</label>
                            <input type="password" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-12 text-center">
                        <div className="mb-3">
                            
                            <input type="button" className="btn btn-success" value="login"/>
                            <input type="button" className="btn btn-danger ms-3" value="cancel"/>
                            <Link to="registor">Registor Now</Link>
                            <Link to="dashboard">Dashboard</Link>
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