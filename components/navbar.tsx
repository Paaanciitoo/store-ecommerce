import { Suspense } from 'react';
import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import getCategories from "@/actions/get-categories";
import Link from "next/link";
import NavbarActions from "@/components/navbar-actions";

export const revalidate = 0;

const Navbar = async () => {
  const categorias = await getCategories();

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-green-100 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-x-2 transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="bg-green-600 p-2 rounded-full">
              <SiHomeassistantcommunitystore
                className="text-white"
                size={32}
              />
            </div>
            <p className="font-bold text-2xl text-green-600 hidden sm:block">
              Tienda<span className="text-lime-600">Mascotas</span>
            </p>
          </Link>
          <Suspense fallback={
            <div className="h-4 w-64 bg-gray-200 animate-pulse rounded-full"></div>
          }>
            <MainNav initialData={categorias} />
          </Suspense>
          <Suspense fallback={
            <div className="flex space-x-4">
              <div className="h-10 w-10 bg-gray-200 animate-pulse rounded-full"></div>
              <div className="h-10 w-10 bg-gray-200 animate-pulse rounded-full"></div>
            </div>
          }>
            <NavbarActions />
          </Suspense>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

