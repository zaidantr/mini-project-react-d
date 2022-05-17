import React, { useContext } from 'react';
import '../components/Pomodoro.css';
import ReactSlider from 'react-slider';
import SettingsContext from './SettingsContext';
import BackButton from './BackButton';

export default function Settings() {
    const settingsInfo = useContext(SettingsContext);

  return (
    <div className='text-2xl capitalize'>
        Settings
        <label className='text-2xl mb-10 mt-10 capitalize' >Work: {settingsInfo.workMinutes}:00</label>
        <ReactSlider 
            className={'slider'}  
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={settingsInfo.workMinutes}
            onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
            min={1}
            max={30}
        />

        <label className='text-2xl block mb-10 capitalize' >Break: {settingsInfo.breakMinutes}:00</label>
        <ReactSlider
            className={'slider green'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={settingsInfo.breakMinutes}
            onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
            min={1}
            max={30}
      />
        <div style={{textAlign:'center', marginTop:'20px'}}>
            <BackButton 
            onClick={() => settingsInfo.setShowSettings(false)}
            />
        </div>

    </div>
  )
}
