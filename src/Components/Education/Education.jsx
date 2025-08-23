// src/components/Education/Education.jsx
import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
    return (
        <section
            id="education"
            className="py-20 px-4 sm:px-8 md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
        >
            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
                <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-3"></div>
                <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium">
                    My education has been a journey of learning and development. Here are the details of my academic background.
                </p>
            </div>

            {/* Education Timeline */}
            <div className="relative">
                {/* Vertical line (only on desktop) */}
                <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-white h-full"></div>

                {/* Education Entries */}
                {education.map((edu, index) => (
                    <div
                        key={edu.id}
                        className={`mb-16 flex flex-col md:flex-row items-center md:items-stretch ${
                            index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                        } w-full relative`}
                    >
                        {/* Timeline Circle */}
                        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full justify-center items-center z-20">
                            <img
                                src={edu.img}
                                alt={edu.school}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>

                        {/* Education Card */}
                        <div
                            className={`w-full md:w-[45%] max-w-lg p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                                index % 2 === 0 ? "md:mr-auto text-left" : "md:ml-auto text-left"
                            }`}
                        >
                            {/* School Info */}
                            <div className="flex items-center space-x-4">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                                    <img
                                        src={edu.img}
                                        alt={edu.school}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                                        {edu.degree}
                                    </h3>
                                    <h4 className="text-sm sm:text-base text-gray-300">
                                        {edu.school}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                                        {edu.date}
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="mt-4 text-gray-400 text-sm sm:text-base">
                                {edu.desc}
                            </p>

                            {/* Grade */}
                            <p className="mt-4 text-gray-400 font-bold text-sm sm:text-base">
                                Grade: {edu.grade}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
