import { useState, useEffect } from "react";
import Image from "next/image";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import { MdOutlineSwitchAccount } from "react-icons/md";
import Link from "next/link";
import useAuth from "../hooks/useAuth";

function Header() {
  const [isScrolled, setisScrolled] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setisScrolled(true);
      } else {
        setisScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="sm hidden sm:inline h-6 w-6 cursor-pointer" />
        <BellIcon className="h-6 w-6 cursor-pointer" />
        {/* <Link href="/account"> */}
          <MdOutlineSwitchAccount onClick={logout} className="cursor-pointer rounded h-6 w-6" />
        {/* </Link> */}
      </div>

      <div className="flex items-center space-x-2 md:space-x-10">
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">בית</li>
          <li className="headerLink">סדרות</li>
          <li className="headerLink">סרטים</li>
          <li className="headerLink">חדש & פופולרי</li>
          <li className="headerLink">הרשימה שלי</li>
        </ul>
        <div>
          <Image
            width={45}
            height={45}
            src="/logo2.png"
            alt="טל לוגו"
            className="cursor-pointer object-contain"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
