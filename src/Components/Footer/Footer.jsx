// src/components/Footer/Footer.jsx
import React from "react";
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaGithub,
} from "react-icons/fa";

const Footer = () => {
    // Smooth scroll function
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="text-white py-10 px-[8vw] md:px-[12vw] lg:px-[18vw] bg-gray-950">
            <div className="container mx-auto text-center">
                {/* Name / Logo */}
                <h2 className="text-2xl font-bold text-[#06A86C] tracking-wide">
                    SUMIT KUMAR DUTTA
                </h2>

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-6">
                    {[
                        { name: "About", id: "about" },
                        { name: "Skills", id: "skills" },
                        { name: "Experience", id: "experience" },
                        { name: "Projects", id: "projects" },
                        { name: "Education", id: "education" },
                    ].map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleScroll(item.id)}
                            className="hover:text-[#06A86C] text-sm sm:text-base transition-colors"
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-5 mt-6 flex-wrap">
                    {[
                        {
                            icon: <FaFacebook />,
                            link: "https://www.facebook.com/sumit.kumardutta.3701/",
                        },
                        { icon: <FaTwitter />, link: "https://twitter.com/sumitkdutta" },
                        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sumitkd16" },
                        { icon: <FaInstagram />, link: "https://www.instagram.com/sumit.css/" },
                        { icon: <FaGithub />, link: "https://github.com/sumitkd16" },
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-[#06A86C] transition-transform transform hover:scale-110"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8"></div>

                {/* Copyright */}
                <p className="text-sm text-gray-400 mt-6">
                    © {new Date().getFullYear()} SUMIT KUMAR DUTTA. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
