import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => (
    <section
        id="skills"
        className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
        {/* Section Title */}
        <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
            <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
            <p className="text-gray-400 mt-4 text-lg font-semibold">
                A collection of my technical skills and expertise honed through various projects and experiences
            </p>
        </div>

        {/* Skill Categories */}
        <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
            {SkillsInfo.map((category) => (
                <div
                    key={category.title}
                    className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white
  hover:scale-105 transition-transform duration-300 ease-in-out"
                >

                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
                        {category.title}
                    </h3>

                    {/* Skill Items - 2 per row on larger screens */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 w-full">
                        {category.skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex items-center justify-start gap-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-3 sm:py-2 sm:px-4 w-full
                                hover:bg-gray-800 hover:scale-105 transition-all duration-300 ease-in-out"
                            >
                                <img
                                    src={skill.logo}
                                    alt={`${skill.name} logo`}
                                    className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
                                />
                                <span className="text-xs sm:text-sm text-gray-300 text-left break-words">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Skills;