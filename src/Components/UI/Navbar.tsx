import { useState } from "react"
import { WrongIcon } from "../Icons/Wrong"
import { MenuIcon } from "../Icons/Menu"
import White from "../Images/White-bg.png"
import Black from "../Images/Black-bg.png"

interface NavbarProps {
    isWhiteBg: boolean
    setIsWhiteBg: (value: boolean) => void
}

export function Navbar({ isWhiteBg, setIsWhiteBg }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="w-full flex items-center justify-center pt-4 relative">
            {/* Desktop */}
            <div className="hidden sm:flex border-2 border-gray-500 p-2 rounded-xl">
                <ul className={`flex gap-10 font-mono text-2xl ${isWhiteBg ? "bg-black text-white" : "bg-white text-black"}`}>
                    <li className={`hover:cursor-pointer ${isWhiteBg ? "hover:text-gray-300" : "hover:text-gray-500"}`}><a href="#">Home</a></li>
                    <li className={`hover:cursor-pointer ${isWhiteBg ? "hover:text-gray-300" : "hover:text-gray-500"}`}>About</li>
                    <li className={`hover:cursor-pointer ${isWhiteBg ? "hover:text-gray-300" : "hover:text-gray-500"}`}><a href="/LUCKY_Mishra_r.pdf" download >Resume</a></li>
                    <li className={`hover:cursor-pointer ${isWhiteBg ? "hover:text-gray-300" : "hover:text-gray-500"}`}><a href="#contact">Work</a></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className="sm:hidden w-full">
                <div className="flex justify-start px-4">
                    <div onClick={() => setMenuOpen(!menuOpen)} className={`${isWhiteBg ? "bg-black text-white" : "bg-white text-blackDinah Harva Kehati. "}`}>
                        <MenuIcon size="lg" />
                    </div>
                </div>

                {/* Mobile Dropdown */}
                {menuOpen && (
                    <ul className={`absolute top-12 left-0 w-full border-gray-300 flex flex-col gap-4 font-mono p-3 z-50 ${isWhiteBg ? "bg-black text-white" : "bg-white text-black"}`}>
                        <div onClick={() => setMenuOpen(false)} className="cursor-pointer self-end ">
                            <WrongIcon size="md" />
                        </div>
                        <li>Home</li>
                        <li>About</li>
                        <li>Resume</li>
                        <li>Work</li>
                    </ul>
                )}
            </div>

            {/* Theme Toggle */}
            <div onClick={() => setIsWhiteBg(!isWhiteBg)} className="absolute right-6 md:`mr-10 hover:cursor-pointer">
                {isWhiteBg ?
                    <img src={White} className="w-6 h-6" /> :
                    <img src={Black} className="w-6 h-6" />}
            </div>
        </div>
    )
}