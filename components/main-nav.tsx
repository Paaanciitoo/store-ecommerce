"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="relative w-full">
      {/* Botón de menú para pantallas md y menores */}
      <button
        className="md:hidden p-2 ml-auto mr-4 w-auto flex justify-end"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
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
        <div className="fixed inset-0 bg-white z-50 md:hidden overflow-y-auto">
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2"
                aria-label="Cerrar menú"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center space-y-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-black py-2",
                    route.active ? "text-black" : "text-gray-500"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNav;
