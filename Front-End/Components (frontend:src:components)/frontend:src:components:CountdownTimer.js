// frontend/src/components/CountdownTimer.js
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function CountdownTimer({ targetDate }) {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const { darkMode } = useTheme();
    useEffect(() => {
        const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
        return;
        }

        timerComponents.push(
        <span key={interval} className="mx-1">
            {timeLeft[interval]} {interval}{" "}
        </span>
        );
    });

    return (
        <div className={`text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
    }

export default CountdownTimer;