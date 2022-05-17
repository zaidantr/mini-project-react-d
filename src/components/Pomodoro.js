import './Pomodoro.css';
import Settings from '../pomodoro/Settings';
import Timer from '../pomodoro/Timer';
import { useState } from 'react';
import SettingsContext from '../pomodoro/SettingsContext';
import AudioPlayer from '../audioplayer/AudioPlayer';

function Pomodoro() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(1);
  const [breakMinutes, setBreakMinutes] = useState(1);

  return (
    <>
      <section className='bg-orange-50 p-10'>
        <main className='pt-50 max-w-md mx-auto my-0 text-center'>
          <SettingsContext.Provider value={{
              showSettings,
              setShowSettings,
              workMinutes,
              breakMinutes,
              setWorkMinutes,
              setBreakMinutes,
            }}>
              {showSettings ? <Settings /> : <Timer/>}
          </SettingsContext.Provider>
        </main>
        <AudioPlayer/>
      </section>
            </>
  );
}

export default Pomodoro;
