import { interval, set } from 'date-fns';
import React, { useEffect, useState } from 'react';

const CurrentTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);

    }, []);
    return (
        <div className="text-center mt-10">

            {/* Time */}
            <h1 className="text-4xl font-bold">
                {time.toLocaleTimeString()}
            </h1>

            {/* Day, Date, Year */}
            <p className="text-xl mt-3 text-gray-600">
                {
                    time.toLocaleDateString('en-US', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    })
                }
            </p>

        </div>
    );
};

export default CurrentTime;