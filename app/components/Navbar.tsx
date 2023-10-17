"use client";
// import {Link as NextLink} from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Link as UILink } from "@nextui-org/react";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const pathname = usePathname();
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    console.log(clicked)
  }, [clicked])
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
                  <a
                    className="rounded-md bg-accent-color px-4 py-1.5 font-medium text-white"
                    href="/"
                  >
                    Donate
                  </a>
                </div>
              </div>
              <button
                id="menu-btn"
                className={`block hamburger md:hidden focus:outline-none ${
                  clicked ? "open" : ""
                }`}
                onClick={() => setClicked(!clicked)}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>

              {/* <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <button className="
              relative before:inline-block before:w-5 
              before:h-[3px] before:absolute before:inset-x-2/4
              before:bg-white before:rotate-45 
              before:-translate-x-[50%] before:-translate-y-[50%] 
              before:rounded before:duration-200
              after:inline-block after:h-5
              after:w-[3px] after:absolute after:inset-x-2/4
              after:bg-white after:rotate-45 
              after:-translate-x-[50%] after:-translate-y-[50%] 
              after:rounded after:duration-200
              "></button>
              
            </div> */}
            </div>
          </div>
        </div>
      </header>
      <NavbarMenu clicked={clicked} />
    </>
  );
};

export default Navbar;
