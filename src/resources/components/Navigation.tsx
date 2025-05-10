import { useState, useEffect } from "react";

export default function Navigation() {
    const [open, setOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY; // Current scroll position
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Total scrollable height
        const progress = (scrollTop / docHeight) * 100; // Calculate scroll progress as a percentage
        setScrollProgress(progress); // Update state
        };

        window.addEventListener("scroll", handleScroll); // Add scroll event listener
        return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    }, []);

    return (
        <nav className="flex items-center justify-between w-full h-18 relative">
            {/* Scroll Progress Bar */}
            <div className="progress-container fixed top-0 left-0 w-full h-1.5  ">
                <div
                id="myBar"
                className="progress-bar h-full bg-brand-orange rounded-r-full"
                style={{ width: `${scrollProgress}%` }} // TODO: fix issue with scroll bar not 100% on mobile
                ></div>
            </div>

            <p className="text-2xl font-bold text-black-600">DW<span className="text-brand-orange">.</span></p>

            {/* Hamburger Icon */}
            <button
                className="sm:hidden flex justify-center items-center w-8 h-8"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
            >
                {open ? (
                // Cross Icon
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                ) : (
                // Hamburger Icon
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
                )}
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
                <div className="LinkedIn-Logo w-8 h-8"> 
                    <a href="https://www.linkedin.com/in/deacan-white/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                        <svg viewBox="0 0 128 128">
                            <path fill="#0076b2" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"></path><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path>
                        </svg>
                    </a>
                </div>
                <div className="GitHub-Logo w-8 h-8">    
                    <a href="https://github.com/DeacanWhite" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                        <svg viewBox="0 0 128 128">
                            <g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    );
}