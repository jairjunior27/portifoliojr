import { StacksItem } from "@/helps/stacks";
import imgSobre from "../assets/imgJrSobre.jpeg";

import { NavItem } from "./navItem";
import { menuPessoal } from "@/helps/dadosnavItem";

export const Sobre = () => {
  const menu = menuPessoal({ color: "#000000" });

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      id="sobre"
    >
      <div className="w-[250px] h-[250px] overflow-hidden rounded-full bg-cover mb-5 ">
        <img
          src={imgSobre.src}
          alt="Jair Junior"
          className="w-full h-full object-top object-cover"
        />
      </div>
      <h2 className="text-4xl font-bold mb-4">Sobre Mim</h2>
      <p className="text-md max-sm:text-sm mx-4 text-center mb-8">
        Formado em Ciências da Computação sou um desenvolvedor de software
        apaixonado por criar soluções inovadoras e eficientes. Tenho experiência
        em várias tecnologias e adoro aprender coisas novas.
      </p>
      <nav className="my-3">
        <ul className="flex">
          {menu.map((item, index) => (
            <NavItem
              href={item.link}
              label={item.title}
              key={index}
              icon={item.icon}
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-500"
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};
