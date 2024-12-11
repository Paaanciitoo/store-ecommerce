import React from 'react'

export default function Description() {
  const nutritionalInfo = [
    { nutrient: "Proteína", amount: "25 g", benefits: "Fortalece músculos y tejidos" },
    { nutrient: "Grasa", amount: "10 g", benefits: "Proporciona energía y mantiene la piel" },
    { nutrient: "Fibra", amount: "5 g", benefits: "Facilita la digestión" },
    { nutrient: "Omega-3 y Omega-6", amount: "1.5 g", benefits: "Mejora la salud del pelaje y piel" },
    { nutrient: "Calcio", amount: "1.2 g", benefits: "Fortalece huesos y dientes" },
    { nutrient: "Fósforo", amount: "1 g", benefits: "Apoya la salud ósea" },
    { nutrient: "Vitamina A", amount: "500 IU", benefits: "Mejora la vista y la función inmunológica" },
    { nutrient: "Vitamina E", amount: "5 mg", benefits: "Actúa como antioxidante" },
    { nutrient: "Taurina (para gatos)", amount: "0.1 g", benefits: "Esencial para la salud ocular y cardíaca" },
    { nutrient: "Zinc", amount: "15 mg", benefits: "Mantiene la salud de la piel y el pelo" },
    { nutrient: "Magnesio", amount: "0.04 g", benefits: "Ayuda en el metabolismo energético" },
  ]

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600 animate-fade-in">Alimentos para Mascotas de Alta Calidad</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-lg rounded-xl p-6 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Descripción del Producto</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Nuestros alimentos para mascotas han sido desarrollados por expertos en nutrición animal, asegurando una fórmula de alta calidad que responde a las necesidades específicas de cada especie. Ya sea que estés buscando el alimento perfecto para un perro, un gato, o una mascota exótica, encontrarás opciones balanceadas, con ingredientes cuidadosamente seleccionados para promover una vida saludable y activa.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Diseñados para cubrir los requerimientos nutricionales en cada etapa de la vida de la mascota, nuestros alimentos contienen proteínas de alta calidad, vitaminas esenciales y minerales que contribuyen a la salud del sistema digestivo, la fortaleza muscular, y un pelaje brillante. Además, las fórmulas son deliciosas y variadas para satisfacer hasta a los paladares más exigentes.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-green-500">Beneficios Generales</h2>
          <ul className="space-y-3">
            {[
              { title: "Proteínas de alta calidad", description: "Aportan los aminoácidos esenciales para el desarrollo muscular y el mantenimiento de una estructura corporal sana." },
              { title: "Ácidos grasos Omega-3 y Omega-6", description: "Ayudan a mantener una piel saludable y un pelaje brillante, además de apoyar la salud del cerebro y el sistema inmunológico." },
              { title: "Fibra natural", description: "Facilita la digestión y promueve un sistema digestivo saludable." },
              { title: "Vitaminas y Minerales", description: "Fortalecen huesos y dientes, ayudan al sistema inmunológico y mejoran el bienestar general." },
              { title: "Libre de conservantes y colorantes artificiales", description: "Ofrece una alimentación más natural, reduciendo el riesgo de alergias y otras reacciones adversas." },
            ].map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <div>
                  <span className="font-semibold text-gray-700">{benefit.title}:</span>
                  <span className="text-gray-600"> {benefit.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 mb-12 overflow-hidden">
        <h2 className="text-2xl font-semibold mb-4 text-purple-500">Tabla Nutricional</h2>
        <p className="text-sm text-gray-600 mb-4">Por cada 100 g de producto</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-purple-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-purple-500 uppercase tracking-wider">Nutriente</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-purple-500 uppercase tracking-wider">Cantidad por 100 g</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-purple-500 uppercase tracking-wider">Beneficios</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-200">
              {nutritionalInfo.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-purple-50' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.nutrient}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.benefits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-lg rounded-xl p-6 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-orange-500">Recomendaciones de Alimentación</h2>
          <p className="text-gray-700 leading-relaxed">
            Dependiendo de la edad, tamaño, y nivel de actividad de tu mascota, ajusta la cantidad de alimento diario recomendado. Recuerda siempre proporcionar agua fresca y cambiarla regularmente para mantener a tu mascota bien hidratada. Consulta con tu veterinario para ajustar la porción ideal según sus necesidades específicas.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-teal-500">Consejos para Mantener el Bienestar de la Mascota</h2>
          <ul className="space-y-3">
            {[
              { title: "Agua", description: "Proporciona siempre agua fresca y limpia. La hidratación es crucial, especialmente en animales que comen alimentos secos." },
              { title: "Ejercicio", description: "Asegúrate de que tengan tiempo de actividad diaria adecuada según su especie (paseos para perros, juegos para gatos, espacio para moverse para aves)." },
              { title: "Chequeos Veterinarios", description: "Realiza chequeos anuales o según sea necesario para detectar posibles problemas de salud a tiempo." },
              { title: "Higiene y Entorno", description: "Mantén el área de alimentación limpia y evita dejar comida expuesta por largos periodos para evitar la proliferación de bacterias." },
            ].map((tip, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div>
                  <span className="font-semibold text-gray-700">{tip.title}:</span>
                  <span className="text-gray-600"> {tip.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}