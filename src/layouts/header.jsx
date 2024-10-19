import { useCallback } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const handleLinkClasses = useCallback(
    ({ isActive }) => (isActive ? "text-green-500 font-bold" : ""),
    []
  );
  const links = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/about-us",
      text: "About us",
    },
    {
      path: "/contact",
      text: "Contact",
    },
  ];

  return (
    <div className="p-4 flex justify-center gap-4">
      {links.map(({ path, text }, index) => (
        <NavLink key={index} className={handleLinkClasses} to={path}>
          {text}
        </NavLink>
      ))}
    </div>
  );
};
