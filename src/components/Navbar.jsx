import { MenuOpen, Dangerous as XIcon } from "@mui/icons-material";

const Navbar = () => {
    return (
        <nav className="px-4 py-5">
            <div className="flex justify-between items-center">
                <div className="font-mono flex items-center md:text-xl">
                    TechAestheti<XIcon />
                </div>
                <div>
                    <div className="hidden gap-5 text-black md:flex">
                        <a href="" className="hover:bg-indigo-500 hover:scale-105 hover:rounded-xl px-3 py-1 lg:px-5">Home</a>
                        <a href="" className="hover:bg-indigo-500 hover:scale-105 hover:rounded-xl px-3 py-1 lg:px-5">About Us</a>
                        <a href="" className="hover:bg-indigo-500 hover:scale-105 hover:rounded-xl px-3 py-1 lg:px-5">Services</a>
                        <a href="" className="hover:bg-indigo-500 hover:scale-105 hover:rounded-xl px-3 py-1 lg:px-5">Portfolio</a>
                        <a href="" className="hover:bg-indigo-500 hover:scale-105 hover:rounded-xl px-3 py-1 lg:px-5">Contact</a>
                    </div>
                </div>
                <div className="bg-heroImg -z-10 bg-cover w-80 h-72 absolute top-0 -right-36 border-2 border-t-0 border-indigo-100 rounded-b-full"></div>
                <button className="bg-indigo-800 px-3 font-bold hover:bg-indigo-900 hover:rounded-xl relative duration-200">Reach Out</button>
                <div className="hidden">
                    <MenuOpen className="menu_icon" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;