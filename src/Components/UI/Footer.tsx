import { useEffect, useState } from "react";
import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { SiGmail, SiCodechef, SiGeeksforgeeks } from "react-icons/si";

interface ChangeTheme {
  isBlack: boolean;
}

export function Footer({ isBlack }: ChangeTheme) {
  const [visitor, setVisitor] = useState(0);

  useEffect(() => {
    fetch("/api/visitor")
      .then((res) => res.json())
      .then((data) => setVisitor(data.count))
      .catch(() => setVisitor(0));
  }, []);

  const socialLinks = [
    { href: "https://x.com/secretDOTenv", icon: FaXTwitter },
    { href: "https://www.linkedin.com/in/lucky8492/", icon: FaLinkedin },
    { href: "https://github.com/lucky8492", icon: BsGithub },
    { href: "https://www.instagram.com/__lucky__here__/", icon: FaInstagram },
    { href: "mailto:luckymishra0606@gmail.com", icon: SiGmail },
    { href: "https://www.codechef.com/users/lucky8492", icon: SiCodechef },
    {
      href: "https://www.geeksforgeeks.org/profile/lucky8492",
      icon: SiGeeksforgeeks,
    },
  ];

  return (
    <footer
      className={`relative mx-auto w-full max-w-7xl px-4 pt-10 pb-6 font-mono sm:px-6 md:px-8 lg:px-12 ${
        isBlack ? "text-white" : "text-black"
      }`}
    >
      {/* Top gradient divider */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-violet-500/70 to-transparent" />

      <div className="flex flex-col gap-8 pt-10 md:flex-row md:items-center md:justify-between md:gap-6">
        {/* Visitors */}
        <div className="flex shrink-0 flex-col gap-1.5">
          <span
            className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest ${
              isBlack ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Visitors
          </span>

          <p className="text-2xl font-bold tracking-wider sm:text-3xl">
            #{String(visitor).padStart(6, "0")}
          </p>
        </div>

        {/* Divider */}
        <div
          className={`hidden h-10 w-px md:block ${
            isBlack ? "bg-white/10" : "bg-black/10"
          }`}
        />

        {/* Copyright */}
        <p
          className={`order-3 text-center text-sm sm:text-base md:order-none ${
            isBlack ? "text-gray-400" : "text-gray-600"
          }`}
        >
          © 2026 Lucky Mishra. All rights reserved.
        </p>

        {/* Divider */}
        <div
          className={`hidden h-10 w-px md:block ${
            isBlack ? "bg-white/10" : "bg-black/10"
          }`}
        />

        {/* Social Icons */}
        <div className="grid grid-cols-4 gap-3 sm:flex sm:flex-wrap sm:justify-center md:justify-end">
          {socialLinks.map(({ href, icon: Icon }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex h-11 w-11 items-center justify-center rounded-lg border transition-all duration-200 hover:scale-105 hover:border-violet-500 hover:text-violet-400 ${
                isBlack
                  ? "border-white/15 bg-white/[0.03] text-white"
                  : "border-black/15 bg-black/[0.02] text-black"
              }`}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}