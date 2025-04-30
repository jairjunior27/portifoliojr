import { menuPessoal } from "@/helps/dadosnavItem";
import imgFundo from "../assets/imgFundo.jpg";
import imgjr from "../assets/jrImage.png";
import { NavItem } from "./navItem";
import { StacksItem } from "@/helps/stacks";
import { StackIcon } from "./stackIcon";
import { ButtomItem } from "./buttonItem";

export const HeroPage = () => {
  const menu = menuPessoal({ color: "#ffffff" });
  const dadosStack = StacksItem;
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8"
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)), url(${imgFundo.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" bg-white/10 backdrop-blur-md shadow-lg border mb-4 border-white/20 rounded-full overflow-hidden h-[250px] w-[250px] max-sm:w-[180px] max-sm:h-[180px]">
        <img src={imgjr.src} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-6xl max-[1100px]:text-4xl max-[400px]:text-3xl text-gray-200">
          Olá, sou{" "}
          <span className="font-edu text-yellow-400">
            Jair <span className="text-gray-400">Júnior</span>
          </span>
        </h2>
        <p className="text-xl max-md:text-sm  text-gray-300 text-center m-4">
          Bacharel em Ciências da Computação e Desenvolvedor Full Stack
        </p>
        <nav className="my-2">
          <ul className="flex">
            {menu.map((item, index) => (
              <NavItem
                href={item.link}
                label={item.title}
                key={index}
                icon={item.icon}
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-300 text-sm"
              />
            ))}
          </ul>
        </nav>
      </div>
      <ButtomItem
        label="Download CV"
        link="/curriculo/CurriculoJair.pdf"
        className="bg-orange-500 my-6 text-gray-200 py-1.5 px-4 rounded-xl cursor-pointer opacity-70 hover:opacity-100"
      />

      <h2 className="text-gray-200 text-2xl  max-sm:text-lg font-bold mb-3">
        Minhas Stacks
      </h2>

      <div className="w-full max-w-[1800px]  ">
        <div className="flex items-center  overflow-x-auto  scrollbar-hide ">
          {dadosStack.map((item, index) => (
            <StackIcon icon={item.icon} name={item.name} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
