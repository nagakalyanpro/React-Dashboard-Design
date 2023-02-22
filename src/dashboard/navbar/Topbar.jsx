import React, {useState} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FcCdLogo } from 'react-icons/fc';
import { RxAvatar } from 'react-icons/rx';

import './topbar.scss'

const Topbar = () => {

  return (
    <div className='nav-section' >
     <div className="nav-left">
     <div className="menu-icon">
          <AiOutlineMenu />
       </div>
       <div className="co-title">
     
          <FcCdLogo />
        </div>
        <div className="title">Rhombus</div>
     
     </div>
     <div className="nav-right">
     <div className='user-avatar'>
        <RxAvatar className='user-icon'/>
        <img src="" alt="" />
       </div>
     </div>
    </div>
  )
}

export default Topbar