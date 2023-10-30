"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { CallButton } from ".";
import EmailButton from "./EmailButton";

const NavbarMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  //To close the Navbar Menu when the user navigates to a page
  useEffect(() => (isOpen ? setIsOpen(false) : void null), [pathname]);
  return (
    <div
      className={`bg-[#0047B0] lg:hidden opacity-0 fixed z-20 w-full left-0 ${
        isOpen ? "top-[50px]" : "top-[-520px]"
      } ${
        isOpen ? "opacity-100 h-screen md:h-auto bottom-0" : ""
      } transition-all ease-in duration-500 flex flex-col items-center gap-y-16 py-10`}
    >
      <ul className="flex flex-col items-center gap-y-16 text-2xl">
        <li>
          <Link
            className={` text-white text-xl relative block after:block after:content-[''] after:absolute 
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
            className={` text-white text-xl relative block after:block after:content-[''] after:absolute 
                    after:h-[2px] after:rounded-full after:bg-accent-color after:w-full after:scale-x-0 
                    after:hover:scale-x-100 after:transition after:duration-300 
                    after:origin-center transition hover:text-[#A8AABC] 
                    ${pathname === "/blog" ? "after:scale-x-100" : ""}`}
            href="/blog"
          >
            Devotionals
          </Link>
        </li>

        <li>
          <Link
            className={` text-white text-xl relative block after:block after:content-[''] after:absolute 
                    after:h-[2px] after:rounded-full after:bg-accent-color after:w-full after:scale-x-0 
                    after:hover:scale-x-100 after:transition after:duration-300 
                    after:origin-center transition hover:text-[#A8AABC] 
                    ${pathname === "/about" ? "after:scale-x-100" : ""}`}
            href="/about"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            className={` text-white text-xl relative block after:block after:content-[''] after:absolute 
                    after:h-[2px] after:rounded-full after:bg-accent-color after:w-full after:scale-x-0 
                    after:hover:scale-x-100 after:transition after:duration-300 
                    after:origin-center transition hover:text-[#A8AABC] 
                    ${pathname === "/contact" ? "after:scale-x-100" : ""}`}
            href="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={` text-white text-xl relative block after:block after:content-[''] after:absolute 
                    after:h-[2px] after:rounded-full after:bg-accent-color after:w-full after:scale-x-0 
                    after:hover:scale-x-100 after:transition after:duration-300 
                    after:origin-center transition hover:text-[#A8AABC] 
                    ${pathname === "/give" ? "after:scale-x-100" : ""}`}
            href="/give"
          >
            Give
          </Link>
        </li>
      </ul>
      <CallButton />
      <EmailButton />
      {/* <Link
        className="text-xl rounded-md bg-accent-color px-6 py-3 font-medium text-white"
        href="/"
      >
        Give
      </Link> */}
    </div>
  );
};

export default NavbarMenu;
