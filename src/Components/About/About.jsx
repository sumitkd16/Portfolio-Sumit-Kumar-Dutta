import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../../assets/profile2.png';

const About = () => {
    return (
        <section
            id="about"
            className="py-10 px-4 sm:px-8 md:px-[7vw] lg:px-[15vw] font-sans mt-20 md:mt-28 lg:mt-36"
        >
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
                {/* Left Side */}
                <div className="md:w-3/5 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                        Hi, I am
                    </h1>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Sumit Kumar Dutta
                    </h2>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
                        <span className="text-white">I am a </span>
                        <Typewriter
                            words={[
                                'Coder',
                                'Front-End Developer',
                                'Back-End Developer',
                                'Java Full Stack Developer',
                            ]}
                            loop={0}
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={500}
                            cursor
                            cursorStyle="|"
                            cursorColor="#8245ec"
                        />
                    </h3>
                    <p className="text-base sm:text-lg text-gray-400 mb-10 mt-6 leading-relaxed">
                        I am a Java full-stack developer with 6 months of experience in
                        building scalable web applications. Skilled in both front-end and
                        back-end development, I specialize in modern technologies to
                        create seamless user experiences and efficient solutions.
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1JuFo7XuAlH2ZC3R4HdHDol9ztDoV-anB/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow:
                                '0 0 4px #8245ec, 0 0 8px #8245ec, 0 0 20px #8245ec',
                        }}
                    >
                        DOWNLOAD CV
                    </a>
                </div>

                {/* Right Side */}
                <div
                    className="md:w-2/5 flex justify-center md:justify-end"
                    style={{ perspective: '1000px' }} // 3D perspective wrapper
                >
                    <img
                        src={profileImage}
                        alt="Sumit Kumar Dutta"
                        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem]
                                   border-4 border-teal-500 rounded-full object-cover
                                   drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]
                                   transition-transform duration-500 ease-in-out"
                        style={{
                            transform: 'translateZ(0px) scale(1)',
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                                'translateZ(60px) scale(1.05)')
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.transform =
                                'translateZ(0px) scale(1)')
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
