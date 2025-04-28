import { ReactNode } from "react";
import { GoArrowUpRight } from "react-icons/go";

type prop = {
  label: string;
  link?: string;
  handleButton?: () => void;
  icon?: ReactNode;
  coIcon?: ReactNode;
  className: string;
};
export const ButtomItem = ({
  label,
  link,
  handleButton,
  icon,
  className,
  coIcon,
}: prop) => {
  if (link) {
    return (
      <a href={link} target="blank"  download className={className}>
        {icon && <span>{icon}</span>}
        {label}
        {coIcon && <span className="text-sky-500 hover:text-gray-200">{<GoArrowUpRight size={20}  />}</span>}

      </a>
    );
  }
  return (
    <div onClick={handleButton} className={className}>
      {icon && <span className="text-gray-400">{icon}</span>}

      {label}
      {coIcon && <span className="text-sky-500 hover:text-gray-200">{<GoArrowUpRight size={20}  />}</span>}
    </div>
  );
};
