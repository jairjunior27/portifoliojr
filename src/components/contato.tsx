import { FaGithub, FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import { ButtomItem } from "./buttonItem";

export const Contato = () => {
  return (
    <div
      id="contato"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6 "
    >
      <h2 className="text-4xl  mb-4 text-sky-400">Contato</h2>
      <p className="text-md max-sm:text-sm mb-4 text-center text-xl text-gray-200">
        Entre em contato ou acompanhe as minhas redes sociais!
      </p>
      <div className="w-full ">
        <ButtomItem
          label="Email"
          className=" bg-white/10 backdrop-blur-md shadow-lg max-w-lg  p-4 rounded-xl m-auto flex items-center
           text-gray-200 justify-between cursor-pointer hover:bg-gray-600 my-5"
          coIcon
          icon={<FaMailBulk size={20} />}
          link="mailto:jaircezar83@gmail.com"
        />
        <ButtomItem
          label="Linkedin"
          className=" bg-white/10 backdrop-blur-md shadow-lg max-w-lg  p-4 rounded-xl m-auto flex items-center
           text-gray-200 justify-between cursor-pointer hover:bg-gray-600 my-5"
          coIcon
          icon={<FaLinkedinIn size={20} />}
          link="https://www.linkedin.com/in/jair-junior-886078216"
        />
        <ButtomItem
          label="Github"
          className=" bg-white/10 backdrop-blur-md shadow-lg max-w-lg  p-4 rounded-xl m-auto flex items-center
           text-gray-200 justify-between cursor-pointer hover:bg-gray-600 my-5"
          coIcon
          icon={<FaGithub size={20} />}
          link="https://github.com/jairjunior27"
        />
      </div>
    </div>
  );
};
