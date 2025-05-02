export default function Navigation() {
    return (
        <nav className="">
            <ul className="flex space-x-4">
                <li>
                    <a href="/" className="text-blue-600 hover:text-blue-800 dark:text-sky-400 dark:hover:text-sky-600">Home</a>
                </li>
                <li>
                    <a href="/about" className="text-blue-600 hover:text-blue-800 dark:text-sky-400 dark:hover:text-sky-600">About</a>
                </li>
                <li>
                    <a href="/contact" className="text-blue-600 hover:text-blue-800 dark:text-sky-400 dark:hover:text-sky-600">Contact</a>
                </li>
            </ul>
        </nav>
    );
}