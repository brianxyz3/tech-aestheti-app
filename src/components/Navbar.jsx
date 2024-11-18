
const Navbar = () => {
    return (
        <nav className="bg-indigo-300 text-white p-6">
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
                <button className="bg-indigo-800 px-2">Reach Out</button>
            </div>
        </nav>
    )
}

export default Navbar;