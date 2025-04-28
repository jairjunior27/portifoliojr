type prop = {
  label: string;
  href: string;
  icon?: any;
  target?: string;
  rel?: string;
  className: string
};
export const NavItem = ({ label, href, icon, target, rel , className}: prop) => {
  return (
    <li className="mx-2 flex items-center cursor-pointer">
      {icon && <p className="mx-1  text-gray-200">{icon}</p>}
      <a
        href={href}
        className={className}
        target={target}
        rel={rel}
      >
        {label}
      </a>
    </li>
  );
};
