import React from 'react'

function Navbar() {
  return (
    <nav className='container mx-auto px-5 py-8 flex items-center justify-between'>
        <a className='text-4xl font-bold text-white' href="#">Users</a>
        <div className='flex items-center gap-5 text-white text-[22px]'>
            <a className='hover:text-yellow-500 hover:underline'href="#">Users</a>
            <a className='hover:text-yellow-500 hover:underline'href="#">products</a>
        </div>
    </nav>
  )
}

export default Navbar