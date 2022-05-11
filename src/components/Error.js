import React from 'react'
import formjoin from '../assets/img/error.svg'


function Error() {
  return (
    <section class="bg-secondary pt-16 pb-16 mx-auto px-12 w-full">
      <div className='text-center'>
            <h1 class="text-2xl font-bold text-white mb-6" >You are succesfully Log In, but our website is still under development.</h1>
      </div>
      <div className='ml-16'>
            <img className='w-1/2 ' src={formjoin} alt="ErrorPic"/>     
      </div>
    </section>    
    )
}

export default Error