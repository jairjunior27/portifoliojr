type prop = {
  name: string;
  icon: any;
};

export const StackIcon = ({ name, icon }: prop) => {
  return (
    <div className="flex flex-col items-center justify-center  text-gray-200 text-sm mx-2 bg-white/20 p-4 rounded w-[100px] h-[100px]">
      <p className="mb-2">{icon}</p>
      <span className="text-xs text-center">{name}</span>
    </div>
  );
};
