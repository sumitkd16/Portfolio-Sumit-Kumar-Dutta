// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => (
    <section
        id="skills"
        className="py-24 px-[8vw] md:px-[10vw] lg:px-[18vw] font-sans bg-skills-gradient clip-path-custom"
    >
        {/* Section Title */}
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
            <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>
            <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
                A collection of my technical skills and expertise honed through various
                projects and experiences.
            </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {SkillsInfo.map((category) => (
                <div
                    key={category.title}
                    className="bg-gray-900 backdrop-blur-md px-6 sm:px-8 py-8 rounded-2xl border border-white/10 hover:scale-[1.02] transition-transform duration-300 ease-in-out"
                >
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6 text-center">
                        {category.title}
                    </h3>

                    {/* Skill Items */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                        {category.skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex items-center gap-3 border border-gray-700 rounded-xl py-2 px-3 hover:bg-gray-800 hover:scale-105 transition-all duration-300"
                            >
                                <img
                                    src={skill.logo}
                                    alt={`${skill.name} logo`}
                                    className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0"
                                />
                                <span className="text-sm sm:text-base text-gray-300 break-words">
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
