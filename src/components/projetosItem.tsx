import Link from "next/link";

type prop = {
  id: number;
  title: string;
  descricao: string;
  tecnologias: string[];
  link: string;
  imagem: any;
};

export const ProjetosItem = ({
  id,
  title,
  descricao,
  tecnologias,
  link,
  imagem,
}: prop) => {
  const tecnologiasPonto = tecnologias.map((tec) => `| ${tec} `);
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex  flex-col items-center m-8 "
      key={id}
    >
      <div className="max-w-[300px] h-[300px] mb-6">
        {imagem && (
          <img
            src={imagem.src}
            alt=""
            className="w-full h-full object-contain"
          />
        )}
      </div>
      <h2 className="text-2xl mb-2 text-center max-sm:text-[18px] max-sm:font-bold">
        {title}
      </h2>
      <p className="max-w-sm text-center text-sm">{descricao}</p>
      <h2 className="text-center font-bold my-4">Tecnologias:</h2>
      <span className="text-center text-sm">{tecnologiasPonto}</span>
    </Link>
  );
};
