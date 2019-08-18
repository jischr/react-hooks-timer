import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';

function useTimer(initialSeconds = 0, initialIsActive = false) {
    let [ seconds, setSeconds ] = useState(initialSeconds);
    let [ isActive, setIsActive ] = useState(initialIsActive);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);

    }, [isActive, seconds]);

    return [ seconds, isActive, reset, toggle ];
}

function Timer() {
    let [ seconds, isActive, reset, toggle  ] = useTimer();

    const textRef = useRef(null);
    function toggleDisplay() {
        textRef.current.classList.toggle('hide');
    }

    return (
        <div>
            <h1>{seconds}s</h1>
            <button onClick={toggle}>
                { isActive ? 
                    'Pause' : 'Start'
                }
            </button>
            <button onClick={() => { reset(); toggleDisplay();}}>Reset</button>
            <p ref={textRef} className="hide" >We are toggling text with refs!</p>
        </div>
    );
}

export default Timer;