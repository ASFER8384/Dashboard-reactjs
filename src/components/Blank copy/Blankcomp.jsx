import React from 'react'
import "./Blankcomp.css"

export default function Usercomp() {
  return (
    <>
    <div className='users'>
      {/* <div className="user1">
       <button className='adimg'>ADD IMG</button>
      </div> */}
      <div className="user2">
        {/* <input placeholder='Enter Name' className='addinp' type="text" /><br /><br /> */}
        <input  placeholder='Enter First Name' className='addinp' type="text" /><br /><br />
        <input  placeholder='Enter Name' className='addinp' type="text" />
      </div>
      <div className="user3">
        <input  placeholder='Enter Last Name' className='addinp' type="text" /><br /><br />
        <input  placeholder='Enter Email' className='addinp' type="text" /><br /><br />
        <input  placeholder='Enter Contact' className='addinp' type="text" /><br /><br />
        <input  placeholder='Enter Age' className='addinp' type="text" />
      </div>
    </div>
    <div className="Adduser">
    <button className='adduser'>ADD STUDENT</button>
    </div>

    </>
  )
}
