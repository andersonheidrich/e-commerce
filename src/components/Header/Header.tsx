import { Cart, Logo, Navbar } from "./components";

const Header = () => {
  return (
    <div className="flex w-full h-[80px] justify-between items-center px-24 fixed z-[1000] bg-white border-b-1 border-black font-bold gap-2">
      <Logo />
      <Navbar />
      <Cart />
    </div>
  );
};

export default Header;
