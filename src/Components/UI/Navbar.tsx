import { useState } from "react"

import { WrongIcon } from "../Icons/Wrong"

import { MenuIcon } from "../Icons/Menu"

import White from "../Images/White-bg.png"

import Black from "../Images/Black-bg.png"



interface NavbarProps {

  isWhiteBg: boolean

  setIsWhiteBg: (value: boolean) => void

}



type NavLink = {

  href: string

  label: string

  download?: boolean

}



const navLinks: NavLink[] = [

  { href: "#project", label: "Projects" },

  { href: "#certificate", label: "Certificates" },

  { href: "/LUCKY_Mishra_r.pdf", label: "Resume", download: true },

  { href: "#contact", label: "Contact" },

]



export function Navbar({ isWhiteBg, setIsWhiteBg }: NavbarProps) {

  const [menuOpen, setMenuOpen] = useState(false)

  const isDark = isWhiteBg



  const linkClass = isDark

    ? "text-zinc-300 hover:text-white transition-colors"

    : "text-zinc-600 hover:text-zinc-900 transition-colors"



  return (

    <header className="relative z-50 mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 sm:pt-5 md:px-8 lg:px-12 lg:pt-6">

      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-4">

        <a href="#profile" className="font-author text-xl font-bold tracking-tight sm:text-2xl">
{/* 
          <span className={isDark ? "text-white" : "text-zinc-900"}>L</span>

          <span className="text-[#9D4EDD]">M</span> */}

        </a>



        <nav className="hidden justify-center md:flex">

          <ul className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs lg:gap-8 lg:text-sm xl:gap-10 xl:text-base">

            {navLinks.map(({ href, label, download }) => (

              <li key={label}>

                <a href={href} className={linkClass} {...(download ? { download: true } : {})}>

                  {label}

                </a>

              </li>

            ))}

          </ul>

        </nav>



        <div className="flex items-center justify-end gap-2 sm:gap-3">

          <button

            type="button"

            onClick={() => setIsWhiteBg(!isWhiteBg)}

            className={`rounded-full p-1.5 transition hover:ring-2 hover:ring-[#9D4EDD]/40 sm:p-2 ${isDark ? "shadow-[0_0_20px_rgba(157,78,221,0.25)]" : ""}`}

            aria-label="Toggle theme"

          >

            {isDark ? (

              <img src={White} className="h-5 w-5 sm:h-6 sm:w-6" alt="" />

            ) : (

              <img src={Black} className="h-5 w-5 sm:h-6 sm:w-6" alt="" />

            )}

          </button>



          <button

            type="button"

            className={`md:hidden ${isDark ? "text-white" : "text-zinc-900"}`}

            onClick={() => setMenuOpen(!menuOpen)}

            aria-label={menuOpen ? "Close menu" : "Open menu"}

            aria-expanded={menuOpen}

          >

            <MenuIcon size="lg" />

          </button>

        </div>

      </div>



      {menuOpen && (

        <div

          className={`absolute left-4 right-4 top-full z-50 mt-2 rounded-xl border p-4 font-mono text-sm shadow-lg md:hidden ${isDark ? "border-white/10 bg-[#0a0a0a] text-white" : "border-zinc-200 bg-white text-zinc-900"}`}

        >

          <button

            type="button"

            className="mb-3 ml-auto flex cursor-pointer"

            onClick={() => setMenuOpen(false)}

            aria-label="Close menu"

          >

            <WrongIcon size="md" />

          </button>

          <ul className="flex flex-col gap-4">

            {navLinks.map(({ href, label, download }) => (

              <li key={label}>

                <a

                  href={href}

                  className="block py-1"

                  onClick={() => setMenuOpen(false)}

                  {...(download ? { download: true } : {})}

                >

                  {label}

                </a>

              </li>

            ))}

          </ul>

        </div>

      )}

    </header>

  )

}

