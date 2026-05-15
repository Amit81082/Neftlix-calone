import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import { FaChevronDown } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import { IoSearch, IoNotificationsOutline } from "react-icons/io5";
import AccountMenu from "./AccountMenu";
import useCurrentUser from "@/app/hooks/useCurrentUser";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const { user: currentUser } = useCurrentUser();

  const Top_offset = 66;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= Top_offset) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu((current) => !current);
  };

  const toggleAccountMenu = () => {
    setShowAccountMenu((current) => !current);
  };

  return (
    <nav className="fixed w-full z-40">
      <div className={`px-2 md:px-12 flex flex-row items-center  transition duration-500 ${showBackground ? "bg-zinc-900 bg-opacity-90" : ""}`}>
        <img src="/images/logo.png" alt="Logo" className="h-16 lg:h-20" />
        <div className="hidden lg:flex flex-row ml-8 gap-7">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-2 relative cursor-pointer"
        >
          <p className="text-white text-sm">Browse</p>
          <FaChevronDown className={`text-white transition ${showMobileMenu ? "rotate-180" : "rotate-0"}`} />
          <MobileMenu visible={showMobileMenu} />
        </div>
        {/* show search icon */}
        <div className="flex flex-row ml-auto gap-4 md:gap-6 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <IoSearch size={22} />
          </div>
          {/* show bell icon */}
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <IoNotificationsOutline size={22} />
          </div>
          {/* show profile */}
          <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.jpg" alt="Profile" />
            </div>
            <FaChevronDown className={`text-white transition ${showAccountMenu ? "rotate-180" : "rotate-0"}`} />
            <AccountMenu visible={showAccountMenu} username={currentUser?.name} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
