import React, { useEffect } from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/About/About.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Work from "./Components/Work/Work.jsx";
import Education from "./Components/Education/Education.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import BlurBlob from './Components/BlurBlob.jsx';

function App() {
    // ⬇️ scroll to top on initial load
    useEffect(() => {
        window.history.scrollRestoration = "manual"; // disable browser restore
        window.scrollTo(0, 0); // always start at top
    }, []);

    return (
        <div className="relative overflow-hidden">
            <BlurBlob />
            <div className="relative pt-20 z-10">
                <Navbar />
                <About />
                <Skills />
                <Experience />
                <Work />
                <Education />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
