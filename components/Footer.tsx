import React from "react";
import { FaYoutube, FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-100 py-16 font-sans">
            <div className="max-w-screen-xl mx-auto px-4 space-y-16">

                {/* Footer Columns */}
                <div className="flex flex-wrap gap-8">

                    {/* About MaxLife */}
                    <div className="flex-1 min-w-[250px]">
                        <h3 className="text-lg font-bold mb-4 text-gray-100">
                            ABOUT <span className="text-blue-400">MAXLIFE</span>
                        </h3>
                        <div className="w-12 h-1 bg-blue-400 mb-6 rounded"></div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            MaxLife Health and Wellness is dedicated to helping you achieve optimal health through
                            evidence-based guidance, support, and resources. Our mission is to empower individuals
                            on their journey toward healthier living and sustainable wellness practices.
                        </p>
                    </div>

                    {/* Social Media */}
                    <div className="flex-1 min-w-[250px]">
                        <h3 className="text-lg font-bold mb-4 text-gray-100">
                            SOCIAL <span className="text-blue-400">MEDIA</span>
                        </h3>
                        <div className="w-12 h-1 bg-blue-400 mb-6 rounded"></div>
                        <div className="flex flex-col gap-3">
                            {[
                                { icon: <FaYoutube />, name: "YouTube", link: "#youtube" },
                                { icon: <FaTwitter />, name: "Twitter", link: "#twitter" },
                                { icon: <FaLinkedin />, name: "LinkedIn", link: "#linkedin" },
                                { icon: <FaFacebook />, name: "Facebook", link: "#facebook" },
                                { icon: <FaInstagram />, name: "Instagram", link: "#instagram" },
                            ].map(({ icon, name, link }) => (
                                <a
                                    key={name}
                                    href={link}
                                    className="flex items-center gap-2 text-gray-100 hover:text-blue-400 transition"
                                >
                                    <span className="text-xl">{icon}</span>
                                    {name}
                                </a>
                            ))}
                        </div>
                    </div>


                    {/* Latest Updates */}
                    <div className="flex-1 min-w-[250px]">
                        <h3 className="text-lg font-bold mb-4 text-gray-100">
                            LATEST <span className="text-blue-400">UPDATES</span>
                        </h3>
                        <div className="w-12 h-1 bg-blue-400 mb-6 rounded"></div>
                        <div className="flex flex-col gap-5">
                            {[
                                {
                                    text: "New research shows that 30 minutes of daily moderate exercise can significantly improve overall health markers.",
                                    date: "April 20, 2025",
                                },
                                {
                                    text: "Our latest nutrition guide for balanced eating is now available for all subscribers.",
                                    date: "April 15, 2025",
                                },
                            ].map((update, index) => (
                                <div key={index} className="border-l-2 border-blue-400 pl-3">
                                    <p className="text-gray-400 text-sm leading-relaxed mb-1">{update.text}</p>
                                    <span className="text-gray-500 text-xs italic">{update.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="flex-1 min-w-[250px]">
                        <h3 className="text-lg font-bold mb-4 text-gray-100">
                            SUBSCRIBE TO OUR <span className="text-blue-400">NEWSLETTER</span>
                        </h3>
                        <div className="w-12 h-1 bg-blue-400 mb-6 rounded"></div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Stay updated with the latest health tips, wellness advice, and exclusive content.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="px-4 py-2 rounded bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-700 pt-6 text-sm text-gray-500">
                    <p>&copy; 2016-2025 MaxLife Health and Wellness. All rights reserved.</p>
                    <div className="flex gap-6 flex-wrap justify-center md:justify-end">
                        {["Privacy Policy", "Terms of Use", "Contact Us"].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                                className="hover:text-blue-400 transition"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
