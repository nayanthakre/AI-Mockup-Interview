import React from 'react'
import Header from './_component/Header'

function DashboardLayout({children}) {
  return (
    <div>
      <Header></Header>
      <div className='m-5  md:mx-20 lg:mx-36'>
      {children}
      </div>
        
    </div>
  )
}

export default DashboardLayout