import React, {useState} from 'react'


import './App.css'
import Main from './dashboard/content/Main'

import Topbar from './dashboard/navbar/Topbar'
import SideMenu from './dashboard/sidebar/SideMenu'

const App = () => {
  const [isDark, setIsDark] = useState(true);

 const changeTheme = () => {
    setIsDark(!isDark);
  };
  return (
            <div className={isDark? "light-theme":"dark-theme"}>
    <layout className="layout-section">
      <div className="sideNav-section">
        <SideMenu />
      </div>
      <div className="db-section">
        <Topbar />
        <Main />
      </div>   
    </layout>
    </div>
  )
}

export default App