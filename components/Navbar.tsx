"use client";

import { useState, useRef } from "react";
import { Sacramento, Montserrat } from "next/font/google";
import Link from "next/link";
import { ChevronDownIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { menuData } from "../data/menuData";

const sacramento = Sacramento({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"] });


export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdownsMobile, setOpenDropdownsMobile] = useState<Record<string, boolean>>({});
  const [openDropdownsDesktop, setOpenDropdownsDesktop] = useState<Record<string, boolean>>({});
  const timeoutRefs = useRef<Record<string, NodeJS.Timeout>>({});

  const toggleMobileDropdown = (name: string) => {
    setOpenDropdownsMobile((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const openDropdown = (name: string) => {
    clearTimeout(timeoutRefs.current[name]);
    setOpenDropdownsDesktop((prev) => ({ ...prev, [name]: true }));
  };

  const closeDropdown = (name: string) => {
    timeoutRefs.current[name] = setTimeout(() => {
      setOpenDropdownsDesktop((prev) => ({ ...prev, [name]: false }));
    }, 200);
  };

  return (
    <header className={`relative px-10 z-50 border-b border-blue-700 bg-blue-900 ${montserrat.className}`}>
      <div className="px-4 py-3 max-w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={`hidden sm:block text-[32px] text-white ${sacramento.className}`}>
          <span className="text-cyan-400">Max</span>Life.org
        </Link>
        <Link href="/" className={`sm:hidden text-2xl text-white ${sacramento.className}`}>
            <span className="text-cyan-400">Max</span>Life.org
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-x-16 items-center">
          {menuData.map((menu) =>
            menu.submenu ? (
              <div
                key={menu.name}
                className="relative"
                onMouseEnter={() => openDropdown(menu.name)}
                onMouseLeave={() => closeDropdown(menu.name)}
              >
                <button className="flex items-center text-white font-normal text-[15px] hover:text-blue-200">
                  {menu.name} <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform ${openDropdownsDesktop[menu.name] ? "rotate-180" : ""}`} />
                </button>
                {openDropdownsDesktop[menu.name] && (
                  <ul className="absolute left-0 top-full mt-1 min-w-[250px] bg-blue-900 rounded-md overflow-hidden z-50 shadow-sm transition-all duration-300">
                    {menu.submenu.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          href={sub.link}
                          className="block px-4 py-2 text-white font-medium text-[15px] hover:bg-blue-950 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={menu.name}
                href={menu.link}
                className="text-white font-normal text-[15px] hover:text-blue-200"
              >
                {menu.name}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-2/3 max-w-[300px] h-full bg-blue-900 shadow-lg p-6 z-50 transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-4">
          {menuData.map((menu) =>
            menu.submenu ? (
              <li key={menu.name}>
                <button
                  onClick={() => toggleMobileDropdown(menu.name)}
                  className="w-full flex justify-between items-center text-white font-normal text-[15px]"
                >
                  {menu.name} <ChevronDownIcon className="w-4 h-4 ml-1" />
                </button>
                <ul
                  className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                    openDropdownsMobile[menu.name] ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {menu.submenu.map((sub) => (
                    <li key={sub.name}>
                      <Link
                        href={sub.link}
                        className="block px-4 py-2 text-white font-medium text-[15px] hover:bg-blue-950 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={menu.name}>
                <Link
                  href={menu.link}
                  className="text-white font-normal text-[15px] block hover:text-blue-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {menu.name}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
