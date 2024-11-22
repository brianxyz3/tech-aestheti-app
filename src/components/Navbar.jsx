import { Dangerous as XIcon } from "@mui/icons-material";

const Navbar = () => {
    return (
        <nav className="p-6">
            <div className="flex justify-between">
                <div className="font-mono text-xl ">
                    TechAestheti<XIcon />
                </div>
                <div>
                    <div className="flex gap-5">
                        <a href="" className="hover:bg-indigo-500 hover:font-bold hover:rounded-xl p-2">Home</a>
                        <a href="" className="hover:bg-indigo-500 hover:font-bold hover:rounded-xl p-2">About Us</a>
                        <a href="" className="hover:bg-indigo-500 hover:font-bold hover:rounded-xl p-2">Services</a>
                        <a href="" className="hover:bg-indigo-500 hover:font-bold hover:rounded-xl p-2">Portfoao</a>
                        <a href="" className="hover:bg-indigo-500 hover:font-bold hover:rounded-xl p-2">Contact</a>
                    </div>
                </div>
                <div className="bg-heroImg bg-cover w-80 h-72 absolute top-0 -right-36 border-2 border-t-0 border-indigo-100 rounded-b-full"></div>
                <button className="bg-indigo-800 px-3 font-bold hover:bg-indigo-900 hover:rounded-xl hover:px-4 relative">Reach Out</button>
            </div>
        </nav>
    )
}

export default Navbar;