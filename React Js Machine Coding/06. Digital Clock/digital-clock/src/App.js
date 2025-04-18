import { useEffect, useState } from "react";
import './app.css';

function App() {
  const [time, setTime] = useState('');

  useEffect(() => {

    setInterval(() => {
      let newTime = dateDisplay();
      setTime(newTime);
    }, 1000)
    // return clearInterval(date);

  }, []);

  const dateDisplay = () => {
    let newDate = new Date();
    let hour = new Date().getHours();
    let amPm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    let min = new Date().getMinutes();
    min = min < 10 ? `0${min}` : `${min}`
    let second = new Date().getSeconds();
    second = second < 10 ? `0${second}` : `${second}`
    return `${hour} : ${min} : ${second} ${amPm}`
  }




  return (
    <>
      <h1>Digital Clock</h1>
      <div className="container">
        {time}
      </div>
    </>
  );
}

export default App;
