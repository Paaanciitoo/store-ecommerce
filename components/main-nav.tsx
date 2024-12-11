"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from 'lucide-react';

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const routes = data.map((route) => ({
    href: `/categorias/${route.id}`,
    label: route.name,
    active: pathname === `/categorias/${route.id}`,
  }));

  return (
    <nav className="relative w-full">
      {/* Botón de menú para pantallas md y menores */}
      <button 
        className="md:hidden p-2 ml-auto mr-4 w-auto flex justify-end"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú para pantallas mayores a md */}
      <div className="hidden md:flex mx-6 items-center space-x-4 lg:space-x-6 flex-wrap">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-black py-2",
              route.active ? "text-black" : "text-gray-500"
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>

      {/* Menú desplegable para pantallas md y menores */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b md:hidden z-50">
          <div className="flex flex-col space-y-2 p-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-black py-2",
                  route.active ? "text-black" : "text-gray-500"
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNav;