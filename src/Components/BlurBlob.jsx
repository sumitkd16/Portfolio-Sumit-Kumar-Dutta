import React, { useEffect, useState, useCallback } from "react";

const BlurBlob = () => {
    const [stars, setStars] = useState([]);
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

    useEffect(() => {
        // Check if the browser is mobile and the viewport is wide (desktop mode)
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile && window.innerWidth > 768) {
            setUseFixed(true);
        }

        // Generate initial stars
        generateStars();

        // Create a debounced version of the resize handler
        const debouncedResizeHandler = debounce(() => {
            generateStars();
        }, 250);

        window.addEventListener("resize", debouncedResizeHandler);
        return () => window.removeEventListener("resize", debouncedResizeHandler);
    }, [generateStars]);

    return (
        <div
            className={`${useFixed ? "fixed" : "absolute"} inset-0 overflow-hidden pointer-events-none z-0`}
        >
            {/* Render Static Stars */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                    }}
                />
            ))}
        </div>
    );
};

export default BlurBlob;