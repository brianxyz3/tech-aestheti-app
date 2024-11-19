
const Navbar = () => {
    return (
        <nav className="p-6">
            <div className="flex justify-between">
                <div>
                    TechAestheti
                </div>
                <div>
                    <ul className="flex gap-5">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="bg-heroImg bg-cover w-80 h-72 absolute top-0 -right-36 border-2 border-t-0 border-indigo-300 rounded-b-full"></div>
                <button className="bg-indigo-800 px-3 font-bold relative">Reach Out</button>
            </div>
        </nav>
    )
}

export default Navbar;