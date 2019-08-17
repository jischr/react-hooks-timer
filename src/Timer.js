import React, { useState } from 'react';

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