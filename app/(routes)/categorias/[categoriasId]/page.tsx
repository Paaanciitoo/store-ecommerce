import getCategory from "@/actions/get-category";
import getColor from "@/actions/get-colores";
import getPesos from "@/actions/get-pesos";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";
import Filter from "./components/filter";
import {
  PawPrintIcon,
  FilterIcon,
  PackageIcon,
  ScaleIcon as ScalesIcon,
  PaletteIcon,
} from "lucide-react";

export const revalidate = 0;

interface CategoriaPageProps {
  params: {
    categoriasId: string;
  };
  searchParams: {
    coloresId: string;
    pesosId: string;
  };
}

const CategoriaPage: React.FC<CategoriaPageProps> = async ({
  params,
  searchParams,
}) => {
  const productos = await getProducts({
    categoriasId: params.categoriasId,
    coloresId: searchParams.coloresId,
    pesosId: searchParams.pesosId,
  });

  const pesos = await getPesos();
  const colores = await getColor();
  const categoria = await getCategory(params.categoriasId);

  const productosFiltrados = productos.filter(
    (producto) => producto.categorias.id === params.categoriasId
  );

  return (
    <div className="min-h-screen">
      <Container>
        <div className="pb-12">
          <Billboard data={categoria.billboard} />
        </div>
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <div className="hidden lg:block">
              <h2 className="text-2xl font-extrabold text-purple-800 mb-6 flex items-center">
                <FilterIcon className="mr-2 text-purple-600" />
                Filtros
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <ScalesIcon className="mr-2 text-blue-500" />
                    Pesos
                  </h3>
                  <Filter valueKey="pesosId" name="Pesos" data={pesos} />
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <PaletteIcon className="mr-2 text-green-500" />
                    Colores
                  </h3>
                  <Filter valueKey="coloresId" name="Colores" data={colores} />
                </div>
              </div>
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h1 className="text-3xl font-extrabold text-purple-800 mb-8 flex items-center">
                  <PawPrintIcon className="mr-2 text-purple-600" />
                  {categoria.name}
                </h1>
                <div className="lg:hidden mb-6">
                  <MobileFilters Pesos={pesos} Colores={colores} />
                </div>
                {productosFiltrados.length === 0 && <NoResults />}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {productosFiltrados.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg overflow-hidden transition-all duration-300"
                    >
                      <ProductCard data={item} />
                      <div className="p-4">
                        <p className="text-gray-600 mb-2 flex items-center">
                          <ScalesIcon className="mr-1 h-4 w-4 text-blue-500" />
                          Peso: {item.pesos.name}
                        </p>
                        <p className="text-gray-600 mb-2 flex items-center">
                          <PaletteIcon className="mr-1 h-4 w-4 text-green-500" />
                          Color: {item.colores.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoriaPage;
