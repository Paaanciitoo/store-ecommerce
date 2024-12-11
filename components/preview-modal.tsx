"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import Modal from "@/components/ui/modal";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import { Product } from "@/types";
import Gallery from "./gallery";
import useCart from "@/hooks/use-cart";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const producto = usePreviewModal((state) => state.data) as Product | null;
  const cart = useCart();

  const onAddToCart = () => {
    if (producto) {
      cart.addItem(producto);
    }
  };

  if (!producto) {
    return null;
  }

  const generalDescription =
    "Descubre nuestra amplia gama de productos para todas tus mascotas, incluyendo gatos, perros, aves, animales exóticos y más. Ofrecemos alimentos, juguetes, accesorios y todo lo que necesitas para el cuidado y bienestar de tus amigos peludos y emplumados.";

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <div className="aspect-square relative">
            <Gallery images={producto.images} />
          </div>
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {producto.name}
          </h2>
          <p className="text-2xl text-red-600 mb-4">
            <Currency value={producto.price} />
          </p>
          <p className="text-md text-gray-600 mb-4 font-semibold">
            Peso: {producto.pesos.name}
          </p>
          <p className="text-md text-gray-600 mb-4">
            <span className="font-semibold">Categoría:</span>{" "}
            {producto.categorias.name}
          </p>
          <Button
            onClick={onAddToCart}
            className="text-sm inline-block mt-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
          >
            <ShoppingCart className="mr-2 h-4 w-4 inline-block" />
            Añadir al carrito
          </Button>
          <hr className="my-4" />
          <p className="text-md text-gray-700">{generalDescription}</p>
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
