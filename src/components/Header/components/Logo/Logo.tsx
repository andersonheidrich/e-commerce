"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center">
      <Image
        src="/images/logo4.png"
        alt="Logo"
        width={64}
        height={64}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
    </div>
  );
};

export default Logo;
