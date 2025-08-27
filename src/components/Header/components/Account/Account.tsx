"use client";
import { useState } from "react";
import { User } from "lucide-react";
import { LoginModal } from "@/components";

const Account = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <User
        className="min-w-7 min-h-7 cursor-pointer text-black"
        onClick={() => setIsOpen(true)}
      />
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Account;
