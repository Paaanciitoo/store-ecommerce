"use client";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Truck, CreditCard, Package, Clock } from "lucide-react";

import useCart from "@/hooks/use-cart";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";

const Summary = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const toastShown = useRef(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!toastShown.current) {
      if (searchParams.get("success")) {
        toast.success("Compra realizada con éxito");
        removeAll();
        toastShown.current = true;
      }

      if (searchParams.get("canceled")) {
        toast.error("Compra cancelada");
        toastShown.current = true;
      }
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    if (items.length === 0) {
      setErrorMessage("No se encuentran productos en el carrito");
      return;
    }
    setErrorMessage("");
    // Existing checkout logic remains unchanged
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productsIds: items.map((item) => item.id),
      }
    );
    window.location = response.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-green-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 border-dashed border-4 border-green-400">
      <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
        Resumen de compra
      </h2>

      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div className="flex items-center">
            <Package className="mr-2 h-5 w-5 text-green-500" />
            <p className="text-md font-medium text-gray-700">
              Productos en carrito:
            </p>
          </div>
          <p className="font-bold text-green-600">{items.length}</p>
        </div>

        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center text-sm"
          >
            <span className="text-gray-600">{item.name}</span>
            <Currency value={item.price} />
          </div>
        ))}

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="flex items-center">
            <CreditCard className="mr-2 h-5 w-5 text-green-500" />
            <p className="text-md font-medium text-gray-700">Monto total:</p>
          </div>
          <span className="text-xl font-bold text-green-600">
            <Currency value={totalPrice} />
          </span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center">
          <Truck className="mr-2 h-5 w-5 text-green-500" />
          <p className="text-md font-medium text-gray-700">
            Información de envío:
          </p>
        </div>
        <div className="bg-white rounded-md p-4 text-sm text-gray-600">
          <p>Método de envío: Estándar</p>
          <p>Tiempo estimado: 3-5 días hábiles</p>
          <p>Costo de envío: Gratis para compras superiores a $50.000</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center">
          <Clock className="mr-2 h-5 w-5 text-green-500" />
          <p className="text-md font-medium text-gray-700">
            Información adicional:
          </p>
        </div>
        <div className="bg-white rounded-md p-4 text-sm text-gray-600">
          <p>Política de devoluciones: 30 días</p>
          <p>Garantía: 1 año en todos los productos</p>
          <p>Atención al cliente: 24/7</p>
        </div>
      </div>

      {errorMessage && (
        <p className="text-red-500 text-sm mt-2 mb-4">{errorMessage}</p>
      )}

      <Button
        disabled={items.length === 0}
        onClick={onCheckout}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300 flex text-center items-center justify-center"
      >
        <CreditCard className="mr-2" />
        Finalizar compra
      </Button>
    </div>
  );
};

export default Summary;
