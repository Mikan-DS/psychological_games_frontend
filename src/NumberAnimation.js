import React, {useEffect, useRef} from 'react';

export default function NumberAnimation({ targetNumber, duration }) {

    const numberRef = useRef(null);

    useEffect(() => {
        const numberElement = numberRef.current;
        let observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        };

        function animateNumber(element, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                element.innerText = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumber(numberElement, 0, targetNumber, duration);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(numberElement);

        return () => {
            if (observer && numberElement) {
                observer.unobserve(numberElement);
            }
        };
    }, [targetNumber]);

    return (
        <div ref={numberRef} className="NumberAnimation">
            0
        </div>
    );
};

