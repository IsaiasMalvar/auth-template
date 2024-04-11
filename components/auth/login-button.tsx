"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({ children, asChild, mode }: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/login");
  };

  return (
    <div onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  );
};
