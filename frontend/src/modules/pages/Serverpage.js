import React, { useState } from 'react'

function Serverpage() {

const [sv,sf]=useState(90);

const abc = (e)=>{
    sf(e.target.value);
}

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 text-center p-5'>
                
                    <input type='text' value={sv} onInput={abc}/>
                <h3>{sv}</h3>
                    

            </div>
        </div>
    </div>
  )
}

export default Serverpage