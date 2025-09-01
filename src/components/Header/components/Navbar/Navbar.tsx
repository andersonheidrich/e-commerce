import Link from "next/link";
import Dropdown from "../Dropdown";

const Navbar = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="flex w-[320px] h-full justify-center items-center">
      <ul className="flex gap-8 justify-center items-center">
        {links.map(({ href, label }) => (
          <li key={href}>
            {label === "Products" ? (
              <Dropdown />
            ) : (
              <Link
                href={href}
                className="cursor-pointer px-2"
                aria-label={label}
              >
                <span>{label}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
