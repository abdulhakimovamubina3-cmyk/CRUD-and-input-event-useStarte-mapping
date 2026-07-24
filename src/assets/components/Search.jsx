import React, { useState} from 'react';

import { RiUserSearchLine } from "react-icons/ri";

function Search({setInputVal}) {
  
  return (
    <section className='py-10 '>
        <div className="container mx-auto px-5">
        <div className='border flex items-center gap-2 px-6 py-5 rounded-2xl border-gray-400'>
          <RiUserSearchLine className='text-gray-400'/>
          <input
            onInput={(e) => setInputVal(e.target.value)}
            className='placeholder:text-gray-400 focus:outline-0 text-gray-500 grow' 
            type="text" 
            placeholder='Serach User' 
          />
        </div>
        </div>

    </section>
  )
}

export default Search;