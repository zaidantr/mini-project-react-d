import { useState, useRef } from 'react'
import song from './song got.mp3'
import ControlPanel from './ControlPanel'

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioRef = useRef()


  const play = () => {
    const audio = audioRef.current
    audio.volume = 0.1

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }

    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    setCurrentTime(time.toFixed(2))
  }

  return (
    <div className='justify-center text-center bg-orange-50 px-10 py-5 border-6'>
      <h1
      className='text-center font-normal text-xl mb-8'
      >
        Study Session
      </h1>
      <audio
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}
        src={song}
        className='bg-white'
        // controls
      ></audio>
      <ControlPanel
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
        className='bg-red'
      />
    </div>
  )
}

export default AudioPlayer