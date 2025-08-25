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
            (window.innerWidth * window.innerHeight) / 2000 // bigger divisor = fewer stars
        );
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 3 + 1,
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const density = 17000; // tweak: smaller = more meteors
        const numberOfMeteors = Math.floor(
            (window.innerWidth * window.innerHeight) / density
        );

        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            const duration = Math.random() * 2 + 5;
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                // 🔑 Start each meteor at a random point in its cycle
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
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 60 + "px",
                        height: meteor.size * 2 + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay + "s",
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};

export default BlurBlob;