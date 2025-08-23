import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_bgs3czh",  // Replace with your EmailJS Service ID
                "template_siz6lak", // Replace with your EmailJS Template ID
                form.current,
                "YsdYeDy8CZQ50tZ3m" // Replace with your EmailJS Public Key
            )
            .then(
                () => {
                    setIsSent(true);
                    form.current.reset();
                    toast.success("Message sent successfully! ✅", {
                        position: "top-right",
                        autoClose: 3000,
                        theme: "dark",
                    });
                },
                (error) => {
                    console.error("Error sending message:", error);
                    toast.error("Failed to send message. Please try again.", {
                        position: "top-right",
                        autoClose: 3000,
                        theme: "dark",
                    });
                }
            );
    };

    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center py-20 px-4 sm:px-8 md:px-[7vw] lg:px-[15vw]"
        >
            {/* Toast Container */}
            <ToastContainer />

            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">CONTACT</h2>
                <div className="w-24 sm:w-32 h-1 bg-[#06A86C] mx-auto mt-3"></div>
                <p className="text-white mt-4 text-base sm:text-lg font-medium">
                    I’d love to hear from you — reach out for any opportunities or questions!
                </p>
            </div>

            {/* Contact Form */}
            <div className="w-full max-w-md bg-[#0d081f] p-6 sm:p-8 rounded-xl shadow-xl border border-gray-700">
                <h3 className="text-lg sm:text-xl font-semibold text-white text-center">
                    Connect With Me <span className="ml-1">🚀</span>
                </h3>

                <form ref={form} onSubmit={sendEmail} className="mt-6 flex flex-col space-y-4">
                    <input
                        type="email"
                        name="user_email"
                        aria-label="Your Email"
                        placeholder="Your Email"
                        required
                        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-[#06A86C]"
                    />
                    <input
                        type="text"
                        name="user_name"
                        aria-label="Your Name"
                        placeholder="Your Name"
                        required
                        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-[#06A86C]"
                    />
                    <input
                        type="text"
                        name="subject"
                        aria-label="Subject"
                        placeholder="Subject"
                        required
                        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-[#06A86C]"
                    />
                    <textarea
                        name="message"
                        aria-label="Message"
                        placeholder="Message"
                        rows="4"
                        required
                        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-[#06A86C]"
                    />

                    {/* Send Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#06A86C] to-[#0FD186] py-3 text-white font-semibold rounded-md shadow-lg hover:opacity-90 hover:scale-[1.02] transition duration-300"
                    >
                        Send
                    </button>
                </form>

                {/* Extra success message (optional) */}
                {isSent && (
                    <p className="text-[#06A86C] text-sm text-center mt-4">
                        ✅ Thanks! Your message has been sent.
                    </p>
                )}
            </div>
        </section>
    );
};

export default Contact;
