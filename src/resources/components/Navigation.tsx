import { useState } from "react";

export default function Navigation() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between w-full h-18 relative">
            <p className="text-2xl font-bold text-black-600">DW<span className="text-brand-orange">.</span></p>
            
            {/* Hamburger Icon */}
            <button
                className="sm:hidden flex flex-col justify-center items-center w-8 h-8"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
            >
                <span className={`block h-1 w-6 bg-black mb-1 transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block h-1 w-6 bg-black mb-1 transition-all ${open ? "opacity-0" : ""}`}></span>
                <span className={`block h-1 w-6 bg-black transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>

            {/* Navigation Links */}
            <ul className={`flex gap-10 sm:flex ${open ? "flex flex-col absolute top-16 right-0 w-full rounded-lg bg-white shadow-lg p-4 z-10" : "hidden"} sm:static sm:flex-row sm:gap-10 sm:bg-transparent sm:shadow-none sm:p-0 sm:w-auto`}>
                <li>
                    <a href="/" className="">Home</a>
                </li>
                <li>
                    <a href="/resume" className="">Resume</a>
                </li>
                <li>
                    <a href="/projects" className="">Projects</a>
                </li>
                <li>
                    <a href="/about" className="">About</a>
                </li>
            </ul>

            {/* Color Circles */}
            <div className="hidden sm:flex items-center space-x-4">
                <div className="w-7 h-7 bg-blue-600 rounded-full"></div>
                <div className="w-7 h-7 bg-sky-400 rounded-full"></div>
            </div>
        </nav>
    );
}