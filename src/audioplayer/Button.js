import React from 'react'
import './button.css'

function Button({ play, isPlaying }) {
  return (
    <div className='flex justify-center align-center w-14 h-14 grow'>
      <div 
      onClick={play} 
      className={isPlaying ? 'stop' : 'play'}
      >
      </div>
    </div>
  )
}
export default Button