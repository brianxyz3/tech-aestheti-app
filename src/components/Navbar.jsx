import { useState } from "react";
import { MenuOpen, Dangerous as XIcon } from "@mui/icons-material";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const menuItems = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "About",
            link: "/"
        },
        {
            title: "Services",
            link: "/"
        },
        {
            title: "Portfolio",
            link: "/"
        },
        {
            title: "Contact",
            link: "/"
        },
    ]

    return (
        <nav className="px-4 py-5 relative">
            <div className="flex justify-between items-center">
                <div className="font-mono flex items-center md:text-xl">
                    TechAestheti<XIcon />
                </div>
                <div>
                    <div className={`${showMenu && "w-3/5 bg-indigo-800 md:bg-inherit md:w-auto text-center rounded-tl-full rounded-bl-full"} z-50 scale-x-100 font-mono fixed right-0 top-14 md:static text-black duration-500 delay-300`}>
                        <ul className={`${showMenu ? "md:w-auto py-2 text-center rounded-tl-full rounded-bl-full scale-x-100" : "-right-1/2 scale-0 h-0"} overflow-hidden md:overflow-visible md:static lg:gap-5 text-white md:text-black md:flex md:h-auto md:scale-100 duration-500`}>
                            {menuItems.map((item, idx) => (
                                <li key={idx}><a href={item.link} className="inline-block hover:bg-indigo-500 hover:scale-105 rounded-xl px-3 py-1 duration-500 lg:px-5">{item.title}</a></li>
                            ))}                            
                        </ul>
                        <button
                            className={`${!showMenu && "border-black shadow-sm shadow-black"} border fixed top-0 right-0 bg-white py-2 px-3.5 rounded-tl-full rounded-bl-full md:hidden`}
                            onClick={() => (setShowMenu((prevState) => !prevState))}>
                            <div
                                className={`${showMenu ? "menu_icon_open" : "menu_icon_closed"}`}>
                                <MenuOpen />
                            </div>
                        </button>
                    </div>
                </div>
                <div className="nav_bg_img -z-10 bg-cover w-80 h-72 absolute top-0 -right-36 border-2 border-t-0 border-indigo-100 rounded-b-full"></div>
                <button className="bg-indigo-800 px-3 font-bold hover:bg-indigo-900 hover:rounded-xl relative duration-200">Reach Out</button>
            </div>
        </nav>
    )
}

export default Navbar;