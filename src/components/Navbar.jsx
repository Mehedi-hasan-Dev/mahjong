"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "MENU", href: "#menu" },
    { name: "GALLERY", href: "#gallery" },
    { name: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full py-4 transition-all duration-300 z-50 ${
        isScrolled
          ? "fixed top-0 bg-white shadow-sm"
          : "absolute top-0 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex flex-col items-center text-center">
          <a
            href="#home"
            onClick={() => {
              setActiveLink("#home");
              setMobileOpen(false);
            }}
          >
            <h1
              className={`font-extrabold text-2xl tracking-widest cursor-pointer ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              MAHJONG
            </h1>
            <span
              className={`text-[10px] tracking-widest uppercase ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-sm font-semibold tracking-wider">
            {navLinks.map((link) => (
              <li key={link.name} className="flex items-center space-x-2">
                {activeLink === link.href && (
                  <span
                    className={`w-1 h-1 rounded-full ${
                      isScrolled ? "bg-black" : "bg-white"
                    }`}
                  ></span>
                )}
                <a
                  href={link.href}
                  className={`transition ${
                    activeLink === link.href
                      ? "text-amber-600"
                      : isScrolled
                      ? "text-black"
                      : "text-white"
                  } hover:text-amber-600`}
                  onClick={() => {
                    setActiveLink(link.href);
                    setMobileOpen(false);
                  }}
                >
                  {link.name}
                </a>
                {activeLink === link.href && (
                  <span
                    className={`w-1 h-1 rounded-full ${
                      isScrolled ? "bg-black" : "bg-white"
                    }`}
                  ></span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden ${isScrolled ? "text-black" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <ul className="flex flex-col items-center py-4 space-y-4 text-sm font-semibold tracking-wider">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`${
                    activeLink === link.href
                      ? "text-amber-600"
                      : "text-black"
                  } hover:text-amber-600 transition`}
                  onClick={() => {
                    setActiveLink(link.href);
                    setMobileOpen(false);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
