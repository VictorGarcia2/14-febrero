import React, { useState } from 'react'

export default function Carta({modal, setModal, handleclick}) {
    
  return (
    <>
    
    <div className={`${modal && "hidden"} fixed inset-0 z-50 flex justify-center mx-auto w-screen h-screen`}>
        <div className='bg-pink-200 w-full  h-screen '>
            <img onClick={handleclick} className={` w-72 mx-auto mt-60 animate-wiggle-more animate-infinite animate-duration-[4000ms]`} src="freepik__background__32838.png" alt="" />
        </div>
    </div>
    </>
  )
}
