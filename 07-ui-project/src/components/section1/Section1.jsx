import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const section1 = () => {
  return (
    <>
      <div className='h-screen w-full'>
        <Navbar/>
        <Page1Content/>
      </div>
    </>
    
  )
}

export default section1