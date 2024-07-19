import React from 'react';
import { Link } from 'react-router-dom';

function Myerrorpage() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col text-center'>
                <h1 className='errorpage'>404</h1>
                <p>Page Not Found</p>
                <Link to="/" className="btn btn-danger">Back to Home Page</Link>
            </div>
        </div>
    </div>
  )
}

export default Myerrorpage