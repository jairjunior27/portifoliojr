import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

export const DadosNavItems = () => ({
  menu: [
    { title: "Home", link: "#home" },
    { title: "Projetos", link: "#projetos" },
    { title: "Sobre", link: "#sobre" },
    { title: "Contato", link: "#contato" },
  ],
});

type prop = {
  color: string;
};

export const menuPessoal = ({ color }: prop) => [
  {
    title: "Github",
    link: "https://github.com/jairjunior27",
    icon: <FaGithub size={24} color={color} />,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/jair-junior-886078216",
    icon: <FaLinkedin size={24} color={color} />,
  },
  {
    title: "Email",
    link: "mailto:jaircezar83@gmail.com",
    icon: <FaMailBulk size={24} color={color} />,
  },
];
