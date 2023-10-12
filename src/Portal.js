import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

function Portal() {
  return (
    <>
 <div id='wrapper'>
    <Sidebar/>
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <Topbar/>
      <div class="container-fluid">
       <Outlet></Outlet>
        
    </div>
    </div>
     <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2020</span>
                    </div>
                </div>
            </footer> 
    </div>
   
    </div>
  </>
  )
}

export default Portal
