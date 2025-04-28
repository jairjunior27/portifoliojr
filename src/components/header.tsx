"use client";
import { useEffect, useState } from "react";
import { NavItem } from "./navItem";
import { DadosNavItems } from "@/helps/dadosnavItem";
import { FaBars } from "react-icons/fa";

const menuHeader = DadosNavItems();

type prop = {
  setModal: (e: boolean) => void;
  isModal: boolean;
};
export const Header = ({ setModal, isModal }: prop) => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 50) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showHeader && (
        <header className="flex justify-between p-4 fixed top-0 left-0 w-full z-10 bg-gray-900 shadow-lg backdrop-blur-md">
          <div className="flex text-4xl">
            <h2 className="font-semibold text-yellow-400">Jair</h2>
            <span className="text-gray-400">Jr</span>
          </div>
          <nav className="max-sm:hidden">
            <ul className="flex ">
              {menuHeader.menu.map((item, index) => (
                <NavItem label={item.title} href={item.link} key={index} className=" text-yellow-300 font-light" />
              ))}
            </ul>
          </nav>
          <FaBars
            className="cursor-pointer hidden max-sm:block"
            size={32}
            color="#ffffff"
            onClick={() => setModal(!isModal)}
          />
        </header>
      )}
    </>
  );
};
