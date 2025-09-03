"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BgCustom } from "@/components/bg-custom";
import clsx from "clsx";
import { CgMenuLeftAlt } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  console.log("active id :", activeId);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sections = document.querySelectorAll("section[id]");
      let current: string = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });

      if (current) {
        setActiveId(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run sekali saat mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = (href: string) => {
    const isBlog = pathname === "/blog" && href === "/blog";

    // Perbaikan di baris ini
    const isSection = pathname === "/" && activeId && href === `/#${activeId}`;

    return clsx(
      "hover:underline transition-colors",
      isBlog || isSection ? "text-pink-500 font-semibold" : "text-gray-900"
    );
  };

  return (
    <nav
      className={clsx(
        "w-full fixed top-0 left-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      {/* BgCustom hanya muncul kalau belum scroll */}
      {!isScrolled && <BgCustom />}

      <div className="flex justify-between items-center px-[5vw] md:px-[7vw] lg:px-[15vw] py-4 max-w-[100rem] mx-auto relative z-10">
        {/* Logo */}
        <Link href="/#home" className="text-2xl font-bold text-black">
          Z
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/#home" className={linkClass("/#home")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" className={linkClass("/#about")}>
              About
            </Link>
          </li>
          <li>
            <Link href="/#projects" className={linkClass("/#projects")}>
              Projects
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-900 focus:outline-none"
          onClick={toggleMenu}
        >
          {!isOpen && <CgMenuLeftAlt />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={clsx(
          "fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-2xl font-bold text-black">Z</h1>
          <button
            aria-label="Close menu"
            onClick={toggleMenu}
            className="text-2xl cursor-pointer text-gray-900"
          >
            <RiCloseFill />
          </button>
        </div>
        <ul className="flex flex-col p-6 space-y-4">
          <li>
            <Link
              href="/#home"
              className={linkClass("/#home")}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className={linkClass("/#about")}
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#projects"
              className={linkClass("/#projects")}
              onClick={toggleMenu}
            >
              Project
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay Background ketika sidebar aktif */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-30" onClick={toggleMenu} />
      )}
    </nav>
  );
}
