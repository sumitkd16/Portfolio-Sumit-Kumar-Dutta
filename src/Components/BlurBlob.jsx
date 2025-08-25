import React, { useEffect, useState, useCallback } from "react";

const BlurBlob = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [useFixed, setUseFixed] = useState(false);

    // Debounce function to prevent too many re-renders on resize
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    const generateStars = useCallback(() => {
        const viewportArea = window.innerWidth * window.innerHeight;
        // Generate a LARGE number of static stars (no animation cost)
        const numberOfStars = Math.floor(viewportArea / 800); // Increased density for more stars

        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 1.5 + 0.5, // Variety of small sizes
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.7 + 0.3, // Variety in brightness
            });
        }
        setStars(newStars);
    }, []);

    const generateMeteors = useCallback(() => {
        const viewportArea = window.innerWidth * window.innerHeight;
        // Good density for a constant stream of meteors
        const density = 9058;
        let numberOfMeteors = Math.floor(viewportArea / density);

        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            const duration = Math.random() * 2 + 2;
            newMeteors.push({
                id: i,
                size: Math.random() * 1.5 + 1, // Good visible size
                x: Math.random() * 100,
                y: Math.random() * 100,
                // Start each meteor at a random point in its cycle
                delay: -(Math.random() * duration),
                animationDuration: duration,
            });
        }
        setMeteors(newMeteors);
    }, []);

    useEffect(() => {
        // Check if the browser is mobile and the viewport is wide (desktop mode)
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile && window.innerWidth > 768) {
            setUseFixed(true);
        }

        // Generate initial stars and meteors
        generateStars();
        generateMeteors();

        // Create a debounced version of the resize handler
        const debouncedResizeHandler = debounce(() => {
            generateStars();
            generateMeteors();
        }, 250);

        window.addEventListener("resize", debouncedResizeHandler);
        return () => window.removeEventListener("resize", debouncedResizeHandler);
    }, [generateStars, generateMeteors]);

    return (
        <div
            className={`${useFixed ? "fixed" : "absolute"} inset-0 overflow-hidden pointer-events-none z-0`}
        >
            {/* Render Static Stars */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star" // Removed the animate-pulse-subtle class
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity, // Static opacity
                    }}
                />
            ))}

            {/* Render Meteors */}
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor"
                    style={{
                        width: `${meteor.size * 70}px`, // Nice long trail
                        height: `${meteor.size}px`,
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        animationDelay: `${meteor.delay}s`,
                        animationDuration: `${meteor.animationDuration}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default BlurBlob;