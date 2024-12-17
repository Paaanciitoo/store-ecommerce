import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import InfiniteSlider from "@/components/infinite-slider";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { PawPrint, Truck, Shield, Heart, Clock, Star } from "lucide-react";

export const revalidate = 0;

const HomePage = async () => {
  const productos = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("8c713298-6f7a-4671-b526-9701d23d7114");

  return (
    <Container>
      <div className="space-y-20 pb-20">
        <div className="relative overflow-hidden rounded-2xl">
          <Billboard data={billboard} />
        </div>

        <section className="text-center p-6 rounded-full hover:scale-105 transition w-auto h-auto">
          <h2 className="text-4xl font-bold mb-6 text-purple-800">
            Bienvenido al Paraíso para tus Mascotas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tu destino único para todo lo que tu mascota necesita. Desde
            alimentos premium hasta juguetes divertidos, tenemos todo para hacer
            feliz a tu compañero peludo.
          </p>
        </section>

        <div className="relative overflow-hidden rounded-full shadow-lg bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-10">
          <InfiniteSlider />
        </div>

        <div className="bg-gradient-to-t from-blue-100 via-sky-200 to-sky-100 rounded-3xl shadow-xl p-10">
          <h2 className="text-4xl font-bold mb-10 text-center text-blue-600 drop-shadow-md">
            Productos Destacados
          </h2>
          <ProductList title="" items={productos} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl p-10 shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-3xl font-bold mb-6 text-yellow-800 drop-shadow-sm">
              Servicio de Cuidado
            </h3>
            <p className="text-yellow-700 mb-6 text-lg">
              Ofrecemos servicios de cuidado y paseo para tus mascotas. Nuestros
              expertos están capacitados para proporcionar atención de calidad,
              incluyendo baños, cortes de pelo, y cuidado de uñas.
            </p>
            <ul className="list-disc list-inside mb-6 text-yellow-700">
              <li>Paseos personalizados</li>
              <li>Cuidado diurno</li>
              <li>Entrenamiento básico</li>
              <li>Servicios de spa para mascotas</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-10 shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-3xl font-bold mb-6 text-green-800 drop-shadow-sm">
              Adopción Responsable
            </h3>
            <p className="text-green-700 mb-6 text-lg">
              Conoce a nuestros amigos en busca de un hogar. Trabajamos con
              refugios locales para ayudar a mascotas necesitadas a encontrar
              familias amorosas.
            </p>
            <ul className="list-disc list-inside mb-6 text-green-700">
              <li>Proceso de adopción simplificado</li>
              <li>Mascotas vacunadas y esterilizadas</li>
              <li>Asesoramiento post-adopción</li>
              <li>Eventos de adopción mensuales</li>
            </ul>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-3xl shadow-xl p-10">
          <h2 className="text-4xl font-bold mb-10 text-purple-800 drop-shadow-md">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white bg-opacity-50 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <PawPrint className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Calidad Premium
              </h3>
              <p className="text-blue-700 text-lg">
                Seleccionamos cuidadosamente cada producto para garantizar la
                mejor calidad para tu mascota.
              </p>
            </div>
            <div className="bg-white bg-opacity-50 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <Truck className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-pink-800">
                Entrega Rápida
              </h3>
              <p className="text-pink-700 text-lg">
                Envíos en 24-48 horas para que tu mascota disfrute de sus
                productos lo antes posible.
              </p>
            </div>
            <div className="bg-white bg-opacity-50 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-purple-800">
                Atención 24/7
              </h3>
              <p className="text-purple-700 text-lg">
                Nuestro equipo de expertos está disponible en todo momento para
                resolver tus dudas.
              </p>
            </div>
          </div>
        </div>

        <section className="bg-gradient-to-r from-blue-100 to-green-100 rounded-3xl shadow-xl p-10">
          <h2 className="text-4xl font-bold mb-10 text-center text-blue-800 drop-shadow-md">
            Nuestros Servicios Adicionales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-70 p-6 rounded-xl shadow-md">
              <Shield className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-blue-800">
                Seguro para Mascotas
              </h3>
              <p className="text-blue-700">
                Protege a tu compañero con nuestros planes de seguro flexibles y
                asequibles.
              </p>
            </div>
            <div className="bg-white bg-opacity-70 p-6 rounded-xl shadow-md">
              <Heart className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-red-800">
                Consultas Veterinarias Online
              </h3>
              <p className="text-red-700">
                Accede a asesoramiento veterinario desde la comodidad de tu
                hogar.
              </p>
            </div>
            <div className="bg-white bg-opacity-70 p-6 rounded-xl shadow-md">
              <Star className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-yellow-800">
                Club de Fidelidad
              </h3>
              <p className="text-yellow-700">
                Únete a nuestro programa de recompensas y obtén descuentos
                exclusivos.
              </p>
            </div>
            <div className="bg-white bg-opacity-70 p-6 rounded-xl shadow-md">
              <PawPrint className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-green-800">
                Talleres de Entrenamiento
              </h3>
              <p className="text-green-700">
                Participa en nuestros talleres mensuales para mejorar el vínculo
                con tu mascota.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default HomePage;
