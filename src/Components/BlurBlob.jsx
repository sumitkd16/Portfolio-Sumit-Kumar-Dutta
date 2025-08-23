// components/BlurBlob.jsx
import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size, shape = "circle" }) => {
    const { top, left } = position;
    const { width, height } = size;

    return (
        <div
            className="absolute"
            style={{
                top,
                left,
                width,
                height,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <div
                className={`
                    w-full h-full bg-purple-500 opacity-20 blur-3xl animate-blob
                    ${shape === "circle" ? "rounded-full" : ""}
                    ${shape === "diamond" ? "rotate-45 rounded-md" : ""}
                    ${shape === "hexagon" ? "clip-path-hexagon" : ""}
                `}
            ></div>
        </div>
    );
};

BlurBlob.propTypes = {
    position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string,
    }),
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
    }),
    shape: PropTypes.oneOf(["circle", "diamond", "hexagon"]),
};

export default BlurBlob;
