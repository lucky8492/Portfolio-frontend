import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { useState } from "react";



interface changeTheme{
   isBlack : boolean
}




export function Footer( {isBlack}:  changeTheme){
    const [visitor] = useState(0);

    return(
        <div>
           <div className={`w-full font-mono text-xl font pt-10 flex md:justify-between  p-4 ${ isBlack ? "text-white" : "text-black"}`}>
              You'r {visitor}th visitor   <p>© 2026 Lucky Mishra. All rights reserved.</p>
              <div className={`md:flex wrap-normal font-bold gap-2 md:gap-5 hover:cursor-pointer `}>
                Know more: 
                <a href="https://x.com/secretDOTenv"><FaXTwitter className="hover:scale-105 transition-all duration-200" size={32}/></a>
                <a href="https://www.linkedin.com/in/lucky8492/"><FaLinkedin className="hover:scale-105 transition-all duration-200" size={32}/></a>
                <a href="https://github.com/lucky8492"><BsGithub className="hover:scale-105 transition-all duration-200" size={32}/></a>
                <a href="https://www.instagram.com/__lucky__here__/"><FaInstagram className="hover:scale-105 transition-all duration-200" size={32}/></a>
                <a href="mailto:luckymishra0606@gmail.com"><SiGmail className="hover:scale-105 transition-all duration-200" size={32}/></a>
                <a href="https://www.codechef.com/users/lucky8492"><SiCodechef className="hover:scale-105 transition-all duration-200" size={32}/></a>
                <a href="https://www.geeksforgeeks.org/profile/lucky8492"><SiGeeksforgeeks className="hover:scale-105  transition-all duration-200" size={32}/></a>
              </div>
           </div>
        </div>
    )
} 