import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Description from "@/components/description";
import AccesoryDescription from "@/components/accesory-description";

interface ProductoPageProps {
  params: {
    productoId: string;
  };
}

export const revalidate = 0;

const ProductoPage: React.FC<ProductoPageProps> = async ({ params }) => {
  const producto = await getProduct(params.productoId);
  const allProducts = await getProducts({
    categoriasId: producto?.categorias?.id,
  });

  // Filtrar los productos relacionados
  const suggestedProducts = allProducts.filter(
    (item) =>
      item.id !== producto.id && item.categorias.id === producto.categorias.id
  );

  // Verificar si el color del producto es "Sin color"
  const showDescription = producto.colores.name === "Sin color";

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={producto.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={producto} />
            </div>
          </div>
          <hr className="my-10" />
          {showDescription ? (
            <div>
              <Description />
            </div>
          ) : (
            <div>
              <AccesoryDescription />
            </div>
          )}
          <hr className="my-10" />
          <ProductList
            title="- Productos similares que te pueden interesar -"
            items={suggestedProducts}
          />
        </div>
      </Container>
    </div>
  );
};

export default ProductoPage;

