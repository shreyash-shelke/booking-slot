import React from 'react'
import { Outlet } from 'react-router-dom'
import UserSideBar from '../UserSideBar'
import Header from '../../common/Header'

export default function Profile() {
  const userData = { userName : 'User', fullName: 'User Name', userMob: '9876543210', userEmail: 'useremail@gmail.com' }
  return (
    <div>
      <Header/>
      <div className="latest-blog sec-mar user-profile mt-0 pt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <UserSideBar uData={userData}/> 
          </div>
          <div className="col-lg-8">
              <Outlet/>           
          </div>
        </div>
      </div>    
      </div>
    </div>
  )
}
