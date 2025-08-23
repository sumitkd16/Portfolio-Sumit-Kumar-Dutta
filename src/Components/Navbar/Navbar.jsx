import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect scroll and change navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll function
    const handleMenuItemClick = (sectionId) => {
        setActiveSection(sectionId);
        setIsOpen(false);

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const menuItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "work", label: "Projects" },
        { id: "education", label: "Education" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition duration-300 
            px-4 sm:px-8 md:px-[7vw] lg:px-[15vw] 
            ${isScrolled ? "bg-[#050414]/70 backdrop-blur-md shadow-md" : "bg-transparent"}`}
        >
            <div className="text-white py-5 flex justify-between items-center">
                {/* Logo */}
                <div className="text-lg font-semibold cursor-pointer whitespace-nowrap">
                    <span className="text-[#06A86C]">&lt;</span>
                    <span className="text-white">SUMIT </span>
                    <span className="text-white">KUMAR </span>
                    <span className="text-white">DUTTA </span>
                    <span className="text-[#06A86C]">   /&gt;</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-white">
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            className={`cursor-pointer hover:text-[#06A86C] ${
                                activeSection === item.id ? "text-[#06A86C]" : ""
                            }`}
                        >
                            <button onClick={() => handleMenuItemClick(item.id)}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Social Icons (Desktop) */}
                <div className="hidden md:flex space-x-4">
                    <a
                        href="https://github.com/sumitkd16"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#06A86C]"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sumitkd16"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#06A86C]"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    {isOpen ? (
                        <FiX
                            className="text-3xl text-[#06A86C] cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        />
                    ) : (
                        <FiMenu
                            className="text-3xl text-[#06A86C] cursor-pointer"
                            onClick={() => setIsOpen(true)}
                        />
                    )}
                </div>
            </div>

            {/* Mobile Menu Items */}
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-[#050414]/90 backdrop-blur-lg z-40 flex flex-col items-center justify-center md:hidden">
                    <ul className="flex flex-col items-center space-y-6 text-lg text-gray-300">
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className={`cursor-pointer hover:text-[#06A86C] ${
                                    activeSection === item.id ? "text-[#06A86C]" : ""
                                }`}
                            >
                                <button onClick={() => handleMenuItemClick(item.id)}>
                                    {item.label}
                                </button>
                            </li>
                        ))}
                        {/* Socials in Mobile Menu */}
                        <div className="flex space-x-6 pt-6">
                            <a
                                href="https://github.com/sumitkd16"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-[#06A86C]"
                            >
                                <FaGithub size={28} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sumitkd16"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-[#06A86C]"
                            >
                                <FaLinkedin size={28} />
                            </a>
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
