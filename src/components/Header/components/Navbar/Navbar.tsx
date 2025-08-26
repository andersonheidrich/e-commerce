import Link from "next/link";

const Navbar = () => {
  const links = [
    { href: "/", label: "Início" },
    { href: "/produtos", label: "Produtos" },
  ];

  return (
    <nav className="flex w-[320px] h-full justify-center items-center">
      <ul className="flex gap-8">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-black cursor-pointer"
              aria-label={label}
            >
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
