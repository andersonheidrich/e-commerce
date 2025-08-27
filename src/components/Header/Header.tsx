import { Account, Cart, Logo, Navbar } from "./components";

const Header = () => {
  return (
    <div className="flex w-full h-[80px] justify-between items-center px-24 fixed z-[1000] bg-white border-b-1 border-black font-bold gap-2">
      <Logo />
      <Navbar />
      <div className="flex gap-8">
        <Cart />
        <Account />
      </div>
    </div>
  );
};

export default Header;
