import { ProjetosItem } from "./projetosItem";
import { DadosProjetos } from "@/helps/dadosProjetos";

export const Projetos = () => {
  const dados = DadosProjetos;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" id="projetos">
      <h2 className="text-3xl mt-25">Projetos</h2>

      <div className="grid grid-cols-2 max-sm:grid-cols-1 items-center mt-10">
        {dados.map((item) => (
          <ProjetosItem
            descricao={item.descricao}
            imagem={item.imagem}
            link={item.link}
            tecnologias={item.tecnologias}
            title={item.title}
            key={item.id}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};
