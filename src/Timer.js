import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';

function Timer() {
    const textRef = useRef(null);
    let [ seconds, setSeconds ] = useState(0);
    let [ isActive, setIsActive ] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
        toggleDisplay();
    }

    function toggleDisplay() {
        textRef.current.classList.toggle('hide');
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

    }, [isActive, seconds])

    return (
        <div>
            <h1>{seconds}s</h1>
            <button onClick={toggle}>
                { isActive ? 
                    'Pause' : 'Start'
                }
            </button>
            <button onClick={reset}>Reset</button>
            <p ref={textRef} className="hide" >We are toggling text with refs!</p>
        </div>
    );
}

export default Timer;