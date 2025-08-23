import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <section
            id="work"
            className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
        >
            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">PROJECTS</h2>
                <div className="w-24 sm:w-32 h-1 bg-[#06A86C] mx-auto mt-3"></div>
                <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
                    A showcase of the projects I have worked on, highlighting my skills
                    and experience in various technologies
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid gap-10 sm:gap-12 grid-cols-1 md:grid-cols-2">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => handleOpenModal(project)}
                        className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-[0_0_20px_2px_rgba(6,168,108,0.5)] hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 sm:h-56 object-contain rounded-t-xl transition-opacity duration-300"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 mb-4 line-clamp-3">
                                {project.description}
                            </p>
                            <div className="mb-2">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="inline-block bg-[#0b1e18] text-xs font-semibold text-[#06A86C] rounded-full px-2 py-1 mr-2 mb-2"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 overflow-auto">
                    <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden relative">
                        {/* Close Button */}
                        <div className="flex justify-end p-4">
                            <button
                                onClick={handleCloseModal}
                                className="text-white text-3xl font-bold hover:text-[#06A86C] transition-colors"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="flex flex-col items-center">
                            {/* Image */}
                            <div className="w-full flex justify-center bg-gray-900 px-4">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="max-h-[500px] w-auto object-contain rounded-xl shadow-2xl transition-opacity duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 lg:p-8 w-full text-center">
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
                                    {selectedProject.title}
                                </h3>
                                <p className="text-gray-400 mb-6 text-sm sm:text-base lg:text-lg">
                                    {selectedProject.description}
                                </p>
                                <div className="flex flex-wrap justify-center gap-2 mb-6">
                                    {selectedProject.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-[#0b1e18] text-xs sm:text-sm font-semibold text-[#06A86C] rounded-full px-3 py-1"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="sm:w-1/2 bg-gray-800 hover:bg-[#0e3d2e] text-gray-300 px-4 py-2 rounded-xl text-sm sm:text-base lg:text-lg font-semibold transition-colors"
                                    >
                                        View Code
                                    </a>
                                    <a
                                        href={selectedProject.webapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="sm:w-1/2 bg-[#06A86C] hover:bg-[#0e3d2e] text-white px-4 py-2 rounded-xl text-sm sm:text-base lg:text-lg font-semibold transition-colors"
                                    >
                                        View Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Work;
