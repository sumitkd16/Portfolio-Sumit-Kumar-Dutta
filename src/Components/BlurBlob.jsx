import React, { useEffect, useState } from "react";

const BlurBlob = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [useFixed, setUseFixed] = useState(false);

    useEffect(() => {
        // detect if user is on mobile in desktop mode
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        const isDesktopMode = window.innerWidth > window.screen.width;
        if (isMobile && isDesktopMode) {
            setUseFixed(true);
        }

        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
            generateMeteors();
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 1500 // Slightly more stars since no animation
        );
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 1.5 + 0.5, // Smaller size variation
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.6 + 0.4, // Better opacity range
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const density = 22000; // Slightly more meteors
        const numberOfMeteors = Math.floor(
            (window.innerWidth * window.innerHeight) / density
        );

        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            const duration = Math.random() * 3 + 4; // 4-7 seconds duration
            newMeteors.push({
                id: i,
                size: Math.random() * 1.8 + 1.2, // Better size range
                x: Math.random() * 100,
                y: Math.random() * 100,
                delay: -(Math.random() * duration),
                animationDuration: duration,
            });
        }
        setMeteors(newMeteors);
    };

    return (
        <div
            className={`${useFixed ? "fixed" : "absolute"} inset-0 overflow-hidden pointer-events-none z-0`}
        >
            {/* Static Stars - No animation */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star" // Removed animate-pulse-subtle class
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        // Removed animationDuration
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor-container"
                    style={{
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay + "s",
                        animationDuration: meteor.animationDuration + "s",
                    }}
                >
                    {/* Meteor Head */}
                    <div
                        className="meteor-head"
                        style={{
                            width: meteor.size * 2.5 + "px", // Slightly smaller head
                            height: meteor.size * 2.5 + "px",
                        }}
                    />
                    {/* Meteor Tail - Longer and more natural */}
                    <div
                        className="meteor-tail"
                        style={{
                            width: meteor.size * 80 + "px", // Longer tail
                            height: meteor.size * 1.5 + "px", // Thinner tail
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default BlurBlob;