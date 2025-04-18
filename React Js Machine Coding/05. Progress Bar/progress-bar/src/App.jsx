import { useEffect } from 'react';
import { useState } from 'react'
import ProgressBar from './components/ProgressBar';
import './styles.css';

function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 0.1);
    }, 20);
  }, [])

  return (
    <>
        <div className='app'>
          <span>Progress Bar</span>
          <ProgressBar value={value} onComplete={() => setSuccess(true)} />
          <span>{success ? "Complete!" : "Loading..."}</span>
        </div>
    </>
  )
}

export default App
