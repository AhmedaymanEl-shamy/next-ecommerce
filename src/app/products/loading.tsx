import React from 'react'

export default function loading() {
  return <>
    <div className='flex bg-black/30 justify-center h-screen items-center text-2xl'>
    <i className="fa-solid fa-spinner fa-2xl text-white fa-spin"></i>
    </div>
  </>
}
