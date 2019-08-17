import React, { useState, useEffect } from 'react';

function Timer() {
    let [ seconds, setSeconds ] = useState(0);
    let [ isActive, setIsActive ] = useState(false);

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
        </div>
    );
}

export default Timer;