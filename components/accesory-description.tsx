import React from "react";
import { Star, Heart, Shield, Truck, RefreshCw } from "lucide-react";

const AccesoryDescription: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-100 p-8 rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold text-purple-800 mb-8 text-center">
        Accesorios de Lujo para tu Mascota
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <h3 className="text-2xl font-semibold text-purple-700 mb-3">
            Collares y Correas Premium
          </h3>
          <p className="text-gray-700 mb-4">
            Nuestros collares y correas están fabricados con los mejores
            materiales, como cuero italiano y nylon balístico. Diseñados para
            durar y lucir increíbles, ofrecen comodidad y estilo para tus paseos
            diarios.
          </p>
          <span className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-full hover:bg-green-600 transition-colors">
            Desde CLP 15.000
          </span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <h3 className="text-2xl font-semibold text-purple-700 mb-3">
            Juguetes Interactivos Innovadores
          </h3>
          <p className="text-gray-700 mb-4">
            Desde puzles que dispensan premios hasta juguetes con tecnología de
            realidad aumentada, nuestra selección mantendrá a tu mascota
            entretenida y estimulada mentalmente durante horas.
          </p>
          <span className="inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded-full hover:bg-blue-600 transition-colors">
            Desde CLP 8.000
          </span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <h3 className="text-2xl font-semibold text-purple-700 mb-3">
            Camas Ortopédicas de Lujo
          </h3>
          <p className="text-gray-700 mb-4">
            Nuestras camas están diseñadas por expertos en salud animal para
            proporcionar el máximo confort. Con espuma viscoelástica y telas
            hipoalergénicas, tu mascota dormirá como un rey.
          </p>
          <span className="inline-block bg-indigo-500 text-white text-sm px-3 py-1 rounded-full hover:bg-indigo-600 transition-colors">
            Desde CLP 45.000
          </span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <h3 className="text-2xl font-semibold text-purple-700 mb-3">
            Accesorios de Alimentación Inteligentes
          </h3>
          <p className="text-gray-700 mb-4">
            Descubre nuestros comederos automáticos con control por app, fuentes
            de agua con filtración avanzada y platos antideslizantes que hacen
            que la hora de comer sea más conveniente y saludable.
          </p>
          <span className="inline-block bg-pink-500 text-white text-sm px-3 py-1 rounded-full hover:bg-pink-600 transition-colors">
            Desde CLP 25.000
          </span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 transition-all duration-300 hover:shadow-xl">
        <h3 className="text-2xl font-bold text-purple-800 mb-4">
          ¿Por qué elegir nuestros accesorios?
        </h3>
        <ul className="space-y-4">
          <li className="flex items-center group">
            <Star className="text-yellow-500 mr-2 transition-transform group-hover:scale-110" />
            <span className="text-gray-700 group-hover:text-purple-700 transition-colors">
              Calidad premium garantizada en cada producto
            </span>
          </li>
          <li className="flex items-center group">
            <Heart className="text-red-500 mr-2 transition-transform group-hover:scale-110" />
            <span className="text-gray-700 group-hover:text-purple-700 transition-colors">
              Diseñados con amor por expertos en cuidado animal
            </span>
          </li>
          <li className="flex items-center group">
            <Shield className="text-green-500 mr-2 transition-transform group-hover:scale-110" />
            <span className="text-gray-700 group-hover:text-purple-700 transition-colors">
              Materiales seguros y no tóxicos para la tranquilidad de los dueños
            </span>
          </li>
          <li className="flex items-center group">
            <Truck className="text-blue-500 mr-2 transition-transform group-hover:scale-110" />
            <span className="text-gray-700 group-hover:text-purple-700 transition-colors">
              Envío rápido y gratuito en pedidos superiores a CLP 30.000
            </span>
          </li>
          <li className="flex items-center group">
            <RefreshCw className="text-purple-500 mr-2 transition-transform group-hover:scale-110" />
            <span className="text-gray-700 group-hover:text-purple-700 transition-colors">
              Política de devolución sin complicaciones de 30 días
            </span>
          </li>
        </ul>
      </div>

      <p className="text-lg text-purple-800 font-semibold text-center">
        Todos nuestros productos están diseñados pensando en la seguridad, el
        confort y la felicidad de tu mascota.
      </p>
    </div>
  );
};

export default AccesoryDescription;
