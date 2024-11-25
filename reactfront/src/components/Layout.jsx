import React from 'react'
import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    <div>
     <Navbar />
     <div className='px-16 py-7'>
        {children}
     </div>

    </div>
  )
}

export default Layout
