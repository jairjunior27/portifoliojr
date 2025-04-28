type prop = {
    setIsModal: (e: boolean) => void
 
}
export const Modal = ({setIsModal}: prop) => {
  return (
    <div className="fixed inset-0 bg-gray-800 w-4/6 flex flex-col align-center justify-center z-30">
      <div className="flex text-4xl absolute top-5 left-5">
        <h2 className="font-semibold text-yellow-400">Jair</h2>
        <span className="text-gray-400">Jr</span>
      </div>{" "}
      <div className="text-gray-200 absolute top-5 right-5 text-2xl" onClick={()=> setIsModal(false)}>X</div>
      <ul className="flex flex-col items-center text-yellow-200 ">
        <li className="mb-5 text-2xl">
          <a href="#home">Home</a>
        </li>
        <li className="mb-5 text-2xl">
          <a href="#projetos">Projetos</a>
        </li>
        <li className="mb-5 text-2xl">
          <a href="#sobre">Sobre</a>
        </li>
        <li className="mb-5 text-2xl">
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </div>
  );
};
