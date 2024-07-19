import React from 'react'
import Mynavbar from '../../shares/Mynavbar'
import Myfooter from '../../shares/Myfooter'
import Mysidebar from '../../shares/Mysidebar'
import Myhomepage from './Myhomepage'
import { Outlet } from 'react-router-dom'

function Mylandingpage() {
  return (
  <div className='container-fluid'>
    <div className='row fixed-top'>
        <div className='col-12 g-0'>
        <Mynavbar/>
        </div>
    </div>
    <div className='row ch'>
        <div className='col-md-2'>
          <Mysidebar/>
        </div>
        <div className='col-md-10'>
            <div className='mypage bg-light border'>
               <Outlet/>
            </div>
        </div>
    </div>

    <div className='row'>
        <div className='col-12 g-0'>
      <Myfooter/>
        </div>
    </div>
  </div>
  )
}

export default Mylandingpage