"use client";

import { Product } from "@/types";
import Image from "next/image";
import { Expand, Loader2, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import { useState, useCallback, MouseEventHandler } from "react";
import IconButton from "./icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const previewModal = usePreviewModal();
  const cart = useCart();

  const handleClick = useCallback(() => {
    if (!isLoading) {
      setIsLoading(true);
      router.push(`/producto/${data?.id}`);
    }
  }, [isLoading, router, data?.id]);

  const onPreview: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.stopPropagation();
      previewModal.onOpen(data);
    },
    [previewModal, data]
  );

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.stopPropagation();
      cart.addItem(data);
    },
    [cart, data]
  );

  return (
    <div className="relative group">
      <div
        onClick={handleClick}
        className="bg-white cursor-pointer rounded-xl border-gray-200 border-solid border-2 p-3 space-y-4 transition-all duration-300 hover:shadow-lg"
      >
        {/* Imágenes y acciones */}
        <div className="aspect-square rounded-xl bg-gray-100 relative overflow-hidden">
          <Image
            alt={data.name}
            src={data?.images?.[0]?.url}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={data.isFeatured}
            loading={data.isFeatured ? "eager" : "lazy"}
            className="aspect-square object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
          />
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
              <IconButton
                onClick={onPreview}
                icon={<Expand size={20} className="text-gray-600" />}
              />
              <IconButton
                onClick={onAddToCart}
                icon={<ShoppingCart size={20} className="text-gray-600" />}
              />
            </div>
          </div>
          {data.isFeatured && (
            <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-semibold rounded-full">
              Destacado
            </span>
          )}
        </div>
        {/* Información del producto */}
        <div>
          <p className="font-semibold text-lg">{data.name}</p>
          <p className="text-sm text-gray-500">{data.categorias?.name}</p>
        </div>
        {/* Precio */}
        <div className="flex items-center justify-between">
          <div className="bg-primary/10 rounded-full px-4 py-2 text-red-600 font-semibold text-2xl">
            <Currency value={data?.price} />
          </div>
        </div>
      </div>

      {/* Pantalla de carga */}
      {isLoading && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-6 max-w-sm w-full mx-4">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 border-t-4 border-primary rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-r-4 border-secondary rounded-full animate-spin animate-reverse"></div>
              <div className="absolute inset-4 border-b-4 border-accent rounded-full animate-spin"></div>
            </div>
            <h2 className="text-2xl font-bold text-primary">
              Cargando producto
            </h2>
            <p className="text-muted-foreground text-center">
              Estamos preparando algo especial para ti...
            </p>
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-primary rounded-full animate-bounce"></span>
              <span
                className="w-3 h-3 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></span>
              <span
                className="w-3 h-3 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
