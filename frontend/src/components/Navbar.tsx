"use client";

import { useState } from "react";
import {
  LogoLink,
  NavLink,
  MobileNavLink,
  MobileMenuButton,
} from "@/components/navigation";
type NavbarLinkProps = {
  id: number;
  title: string;
  href: string;
  icon?: React.ReactNode;
};

const navbarLinks: NavbarLinkProps[] = [
  {
    id: 0,
    title: "Home",
    href: "/",
  },
  {
    id: 1,
    title: "Contact",
    href: "https://github.com/riad-azz",
  },
  {
    id: 2,
    title: "About",
    href: "https://github.com/riad-azz",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50">
      <nav
        role="navigation"
        className="flex bg-blue-600 w-full flex-col items-center justify-between gap-2 border-gray-300 px-4 py-1 md:flex-row md:px-8"
      >
        <div className="flex w-full items-center md:gap-2">
          {/* Logo */}
          <div className="mr-auto w-fit">
            <LogoLink title="Tiktok Saver" href="/" />
          </div>
          {/* Dropdown menu button */}
          <MobileMenuButton onClick={() => setShowMenu(!showMenu)} />
          {/* Main Navigation */}
          <ul className="mr-2 hidden shrink-0 gap-6 md:flex">
            {navbarLinks.map((link) => (
              <NavLink key={link.id} href={link.href}>
                <span>{link.title}</span>
              </NavLink>
            ))}
          </ul>
        </div>
        {/* Mobile Menu Navigation */}
        <ul
          className={`mb-2 flex flex-col gap-2 max-md:w-full ${
            !showMenu && "hidden"
          } md:hidden`}
        >
          {navbarLinks.map((link) => (
            <MobileNavLink key={link.id} href={link.href}>
              <span>{link.title}</span>
            </MobileNavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
