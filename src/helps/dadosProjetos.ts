import imgAdm from "../assets/siteAdm.jpeg";
import imgSite from "../assets/siteSar.jpeg";
import imgAPP1 from "../assets/appSar1.png";
import imgFinancas1 from "../assets/finance1.png";

export const DadosProjetos = [
  {
    id: 1,
    title: "Site Rádio SAR",
    descricao: `Desenvolvimento de um site para uma rádio online, proporcionando aos usuários uma experiência moderna, responsiva e otimizada para diferentes dispositivos.`,
    tecnologias: [
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "Axios",
    ],
    link: "https://sistemaalternativo.vercel.app",
    imagem: imgSite,
  },
  {
    id: 2,
    title: "Aplicativo Rádio  SAR",
    descricao: `Aplicativo Android da rádio online, permitindo aos usuários escutar a programação ao vivo de maneira prática e intuitiva.`,
    tecnologias: [
      "Tailwind CSS",
      "TypeScript",
      "Axios",
      "React Native",
    ],
    link: "https://play.google.com/store/apps/details?id=com.jairjr.sarMobile",
    imagem: imgAPP1,
  },
  {
    id: 3,
    title: "Painel  Admin da Rádio",
    descricao: `Sistema web completo para gerenciamento dos conteúdos da rádio, integrado tanto ao site quanto ao aplicativo mobile. Permite a administração de músicas, notícias e programação.`,
    tecnologias: [
      "Next.js",
      "Node.js",
      "JWT",
      "Prisma",
      "PostgreSQL",
      "Bcrypt",
    ],
    link: "https://siteadm.vercel.app",
    imagem: imgAdm,
  },
  {
    id: 4,
    title: "Cast Finanças - Aplicativo de Controle Financeiro",
    descricao: `Aplicativo mobile de controle financeiro pessoal. Permite o registro de entradas, saídas e categorias de despesas, além de oferecer gráficos analíticos e alertas de vencimento de faturas.`,
    tecnologias: ["React Native", "Async Storage", "SQLite"],
    link: "https://seusite-ou-repo.com/cast-financas",
    imagem: imgFinancas1,
  },
];
