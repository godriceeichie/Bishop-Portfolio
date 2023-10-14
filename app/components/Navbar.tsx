"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  const pathname = usePathname();
  return (
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
                  <Link
                    className={` text-white text-base relative block after:block after:content-[''] after:absolute 
                    after:h-[2px] after:rounded-full after:bg-accent-color after:w-full after:scale-x-0 
                    after:hover:scale-x-100 after:transition after:duration-300 
                    after:origin-center transition hover:text-[#A8AABC] 
                    ${
                      pathname === "/" ? "after:scale-x-100" : ""
                    }`}
                    href="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className={` text-white text-base relative block after:block after:content-[''] after:absolute 
                    after:h-[2px] after:rounded-full after:bg-accent-color after:w-full after:scale-x-0 
                    after:hover:scale-x-100 after:transition after:duration-300 
                    after:origin-center transition hover:text-[#A8AABC] 
                    ${
                      pathname === "/blog" ? "after:scale-x-100" : ""
                    }`}
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
                    ${
                      pathname === "/about" ? "after:hover:scale-x-100" : ""
                    }`}
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
            <div className="sm:flex sm:gap-4">
              {/* <a
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="/"
              >
                Login
              </a> */}

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-accent-color px-4 py-1.5 font-medium text-white"
                  href="/"
                >
                  Donate
                </a>
                {/* <a
                  className="rounded-md bg-gray-100 px-4 py-1.5 font-medium text-accent-color"
                  href="/"
                >
                  Donate
                </a> */}
              </div>
            </div>

            <div className="block md:hidden">
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
