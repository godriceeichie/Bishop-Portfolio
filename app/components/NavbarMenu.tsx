'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarMenu = ({ clicked }: { clicked: boolean }) => {
  const pathname = usePathname();
  return (
    <div
      className={`bg-[#0047B0] md:hidden opacity-0 absolute z-30 w-full  left-0 top-[-400px] ${
        clicked ? "top-[64px] opacity-100 h-screen" : ""
      } transition-all ease-in duration-500 flex flex-col items-center gap-y-16 py-10`}
    >
      <ul className="flex flex-col items-center gap-y-16 text-2xl">
        <li>
          <Link
            className={` text-white text-2xl relative block after:block after:content-[''] after:absolute 
                    after:h-[2px] after:rounded-full after:bg-accent-color after:w-full after:scale-x-0 
                    after:hover:scale-x-100 after:transition after:duration-300 
                    after:origin-center transition hover:text-[#A8AABC] 
                    ${pathname === "/" ? "after:scale-x-100" : ""}`}
            href="/"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            className={` text-white text-2xl relative block after:block after:content-[''] after:absolute 
                    after:h-[2px] after:rounded-full after:bg-accent-color after:w-full after:scale-x-0 
                    after:hover:scale-x-100 after:transition after:duration-300 
                    after:origin-center transition hover:text-[#A8AABC] 
                    ${pathname === "/blog" ? "after:scale-x-100" : ""}`}
            href="/blog"
          >
            Blog
          </Link>
        </li>

        <li>
          <Link
            className={` text-white text-2xl relative block after:block after:content-[''] after:absolute 
                    after:h-[2px] after:rounded-full after:bg-accent-color after:w-full after:scale-x-0 
                    after:hover:scale-x-100 after:transition after:duration-300 
                    after:origin-center transition hover:text-[#A8AABC] 
                    ${pathname === "/about" ? "after:hover:scale-x-100" : ""}`}
            href="/about"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            className={` text-white text-2xl relative block after:block after:content-[''] after:absolute 
                    after:h-[2px] after:rounded-full after:bg-accent-color after:w-full after:scale-x-0 
                    after:hover:scale-x-100 after:transition after:duration-300 
                    after:origin-center transition hover:text-[#A8AABC] 
                    ${
                      pathname === "/contact" ? "after:hover:scale-x-100" : ""
                    }`}
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      <a
        className="text-2xl rounded-md bg-accent-color px-6 py-3 font-medium text-white"
        href="/"
      >
        Donate
      </a>
    </div>
  );
};

export default NavbarMenu;
