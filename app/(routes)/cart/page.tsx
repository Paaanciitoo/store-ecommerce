"use client";

import { useState } from "react";
import { ShoppingCart, Package, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

const CartPage = () => {
  const cart = useCart();
  

  return (
    <div className="min-h-screen">
      <Container>
        <div className="py-16">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center mb-10">
            <ShoppingCart className="mr-4 h-8 w-8 text-green-600" />
            Tu Carrito de Compras
          </h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Productos en tu carrito
              </h2>
              {cart.items.length === 0 ? (
                <div className="text-center py-24">
                  <Package className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">
                    Tu carrito está vacío
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Parece que aún no has añadido productos a tu carrito.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/"
                      className="text-sm font-medium text-green-600 hover:text-green-500 flex items-center justify-center"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Continuar comprando
                    </Link>
                  </div>
                </div>
              ) : (
                <ul
                  role="list"
                  className="border-t border-b border-gray-200 divide-y divide-gray-200"
                >
                  {cart.items.map((item) => (
                    <CartItem key={item.id} data={item} />
                  ))}
                </ul>
              )}
            </section>

            {cart.items.length > 0 && (
              <section
                aria-labelledby="summary-heading"
                className="mt-16 bg-white rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
              >
                <h2
                  id="summary-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Resumen del pedido
                </h2>
                <Summary />
              </section>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
