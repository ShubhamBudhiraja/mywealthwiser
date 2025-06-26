import React, { useEffect, useRef, useState } from 'react';
import style from './index.module.scss';

interface ICounter {
    count: number;
    duration?: number;
    title: string;
    prefix?: string;
    suffix?: string;
    className?: string;
}

const Counter = (props: ICounter) => {
    const { count, prefix = '', suffix, title, duration = 1, className } = props;

    const [counter, setCounter] = useState(0);
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
        const durationMs = duration * 1000;

        const animate = (timestamp: number) => {
            if (!startTimeRef.current) startTimeRef.current = timestamp;
            const elapsed = timestamp - startTimeRef.current;

            const progress = Math.min(elapsed / durationMs, 1);
            const currentCount = Math.floor(progress * count);

            setCounter(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCounter(count);
            }
        };

        requestAnimationFrame(animate);
    }, [count, duration]);

    return (
        <div className={className}>
            <span>
                {prefix}
                {counter}
                {suffix}
            </span>
            <p>{title}</p>
        </div>
    );
};

export default Counter;
