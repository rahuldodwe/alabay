import React from 'react'
import { Outlet } from 'react-router-dom'


const AppLaypot = () => {
  return (
    <div>
    
      <main>
        <Outlet/>
      </main>
    
    </div>
  )
}

export default AppLaypot
