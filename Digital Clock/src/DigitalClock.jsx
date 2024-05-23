import React, {useState, useEffect} from 'react';


function DigitalClock(){

    const [time, setTime] = useState(new Date())
    
    useEffect(() => {
        const myInterval = setInterval(() => {
              setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(myInterval);
        }
    },  [])

    function formatTime(){
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();


        return `${padZero(hours)}: ${padZero(minutes)} : ${padZero(seconds)}`
    }

    function padZero(number){
        if (number < 10){
            number = "0" + number;
        }

        return number;
    }

    return(
        <>
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
        </>
    )
}

export default DigitalClock;