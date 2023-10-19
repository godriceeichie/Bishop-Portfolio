"use client";
// import {Link as NextLink} from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Link as UILink } from "@nextui-org/react";
import NavbarMenu from "./NavbarMenu";
import CTABtn from "./CTABtn";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-[#0047B0]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Logo />
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <UILink
                      as={Link}
                      className={`text-white text-base relative block after:block after:content-[''] after:absolute 
                    after:h-[2px] after:rounded-full after:bg-accent-color after:w-full after:scale-x-0 
                    after:hover:scale-x-100 after:transition after:duration-300 
                    after:origin-center transition hover:text-[#A8AABC] 
                    ${pathname === "/" ? "after:scale-x-100" : ""}`}
                      href="/"
                    >
                      Home
                    </UILink>
                  </li>

                  <li>
                    <Link
                      className={` text-white text-base relative block after:block after:content-[''] after:absolute 
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
                      className={` text-white text-base relative block after:block after:content-[''] after:absolute 
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
                      className={` text-white text-base relative block after:block after:content-[''] after:absolute 
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
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex sm:gap-4">
                <div className=" sm:flex">
                  {/* <a
                    className="rounded-md bg-accent-color px-4 py-1.5 font-medium text-white"
                    href="/"
                  >
                    Donate
                  </a> */}
                  <CTABtn buttonName={'Donate'}/>
                </div>
              </div>
              <button
                id="menu-btn"
                className={`block hamburger md:hidden focus:outline-none ${
                  isOpen ? "open" : ""
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <NavbarMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
