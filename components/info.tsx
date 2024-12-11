"use client";

import { useState, useEffect } from "react";
import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { PiShoppingBagOpen } from "react-icons/pi";
import { Truck } from "lucide-react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  console.log("Datos del producto:", JSON.stringify(data, null, 2));
  console.log("Peso del producto:", data?.pesos);

  const calcularValorPorKG = (precio: number, peso: string) => {
    const pesoNumerico = parseFloat(peso.split(" ")[0]);
    if (pesoNumerico && precio) {
      const valorPorKG = precio / pesoNumerico;
      return formatPesoChileno(valorPorKG);
    }
    return "No disponible";
  };

  const formatPesoChileno = (valor: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(valor);
  };

  const precio =
    typeof data?.price === "string" ? parseFloat(data?.price) : data?.price;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">ฅ {data.name} ฅ</h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-3xl text-red-600">
          <Currency value={precio} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-6">
          {data?.pesos ? (
            <>
              <div>
                <strong>Peso:</strong> {data?.pesos?.name || "No disponible"}
              </div>
              <div>
                <strong>Valor por KG:</strong>{" "}
                {calcularValorPorKG(precio || 0, data?.pesos?.name || "")}
              </div>
            </>
          ) : (
            <div>No hay información de peso disponible</div>
          )}
        </div>
        {data?.colores?.name !== "Sin color" && (
          <div className="flex items-center gap-x-3 gap-y-2">
            <h3 className="font-semibold text-black">Color del producto:</h3>
            <div>{data?.colores?.name || "No disponible"}</div>
            <div
              className="h-8 w-8 rounded-full border border-gray-700"
              style={{ backgroundColor: data?.colores?.value }}
            />
          </div>
        )}
        <div className="mt-10 flex items-center justify-center text-center gap-x-3">
          <Button
            onClick={onAddToCart}
            className="flex items-center gap-x-2 text-center justify-center w-[300px] h-[60px] "
          >
            <PiShoppingBagOpen className="w-6 h-6" />
            Agregar al carrito
          </Button>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 flex items-center ml-auto w-[230px] h-[40px] text-sm font-medium justify-center gap-x-2 px-4 py-2 xs:text-center xs:justify-center xs:items-center bg-blue-700 text-white rounded-lg hover:bg-blue-300 hover:text-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          <Truck />
          Ver información de envío
        </button>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 transition-opacity duration-300">
            <div className="bg-white rounded-lg p-6 max-w-3xl max-h-[80vh] overflow-y-auto shadow-2xl transform transition-all duration-300 ease-in-out">
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h2 className="text-2xl font-bold text-blue-600">
                  Información de envío
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="space-y-8">
                <section className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">
                    Condiciones para retiro en tienda
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <span className="font-medium">Precio de entrega:</span>{" "}
                      gratis para cualquier pedido siempre y cuando el producto
                      se encuentre disponible.
                    </li>
                    <li>
                      <span className="font-medium">Tiempo de entrega:</span>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          <span className="font-medium">Delivery express:</span>{" "}
                          será despachado en el bloque y día seleccionado.
                        </li>
                        <li>
                          <span className="font-medium">Delivery regular:</span>{" "}
                          será despachado en el día seleccionado.
                        </li>
                        <li>
                          <span className="font-medium">Retiro en tienda:</span>{" "}
                          Si tu pedido cuenta con stock en el local, estará
                          listo para retirar en 72 hrs. Y si tu pedido contiene
                          productos que hoy no se encuentran en el local
                          seleccionado, no te preocupes, lo enviaremos gratis en
                          5 días hábiles para locales de RM y en 10 días hábiles
                          para otras regiones.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </section>
                <section className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-green-700">
                    Condiciones de envío regular
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <span className="font-medium">Precio de entrega:</span>{" "}
                      gratis por pedidos mayores a $30.000 a Santiago, Iquique,
                      Antofagasta, Calama, La Serena, Coquimbo, Gran Valparaíso,
                      Talca, Los Ángeles, Concepción y Temuco; y solo si el
                      producto está disponible en la región de la compra. De ser
                      menor, tiene un costo que varía según el volumen del
                      producto. De no estar disponible en la región tiene un
                      costo adicional de envío a pesar de superar los $30.000.
                    </li>
                    <li>
                      <span className="font-medium">Tiempo de entrega:</span>{" "}
                      entrega para pedidos antes de las 7 am son despachados el
                      mismo día. Después de las 7 am al siguiente día hábil.
                      Aplica para Santiago y regiones donde tenemos local (antes
                      mencionadas). En otras regiones el plazo es de hasta 5
                      días hábiles. Todos los despachos para vías exclusivas
                      serán entregados exclusivamente los días sábados. Las
                      comunas rurales de Santiago tienen un costo adicional y
                      pueden ser despachadas por Correos de Chile.
                    </li>
                  </ul>
                </section>
                <section className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-yellow-700">
                    Condiciones de envío express
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <span className="font-medium">Precio de entrega:</span> es
                      de $1.900.
                    </li>
                    <li>
                      <span className="font-medium">Tiempo de entrega:</span> En
                      caso de que un producto no esté disponible en el momento
                      de la compra, nuestro Servicio de Atención al Cliente se
                      pondrá en contacto con usted para informarle del nuevo
                      plazo de entrega u otras alternativas para reemplazar el
                      producto.
                    </li>
                    <li>
                      <span className="font-medium">Alcance de comunas:</span>{" "}
                      RM: Ñuñoa, Peñalolen, Macul, La Reina, Providencia,
                      Santiago, Las Condes, Vitacura y Lo Barnechea - Regiones:
                      La Serena, Coquimbo, Antofagasta, Viña del Mar y Concón
                    </li>
                    <li>
                      <span className="font-medium">Rangos de entrega:</span>{" "}
                      10:00 a 11:59, 12:00 - 13:59, 14:00 - 15:59, 16:00 -
                      17:59, 18:00 - 20:00.
                    </li>
                    <li>
                      En el caso de pedidos que contengan más de dos productos y
                      hayan sido generados para envío express, si la tienda no
                      cuenta con stock de algunos de los productos, el pedido se
                      dividirá en dos envíos: uno desde la bodega principal y
                      otro desde la tienda. Por consiguiente, las fechas de
                      entrega podrán variar dependiendo de las condiciones de
                      envío.
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;
