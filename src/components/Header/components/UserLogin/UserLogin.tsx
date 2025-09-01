"use client";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";

const UserLogin = () => {
  const router = useRouter();
  return (
    <>
      <User
        className="min-w-7 min-h-7 cursor-pointer text-black"
        onClick={() => router.push("/login")}
      />
    </>
  );
};

export default UserLogin;
