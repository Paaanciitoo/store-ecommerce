"use client";

import { useState, useEffect } from "react";
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

  // Cerrar el menú cuando se cambia de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="relative w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo o título del sitio */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold">
              Logo
            </Link>
          </div>

          {/* Menú para pantallas grandes */}
          <div className="hidden md:flex items-center space-x-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-black",
                  route.active ? "text-black" : "text-gray-500"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>

          {/* Botón de menú para pantallas pequeñas */}
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      <div className={cn(
        "md:hidden",
        isOpen ? "block" : "hidden"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium",
                route.active
                  ? "text-white bg-black"
                  : "text-gray-500 hover:text-black hover:bg-gray-100"
              )}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MainNav;

