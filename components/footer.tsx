import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaGithubAlt, FaXTwitter } from "react-icons/fa6";
import { MdPets, MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-green-100 to-green-300 pt-20 pb-16">
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg
          className="relative block w-full h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="flex flex-wrap justify-center items-center w-full">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center">
            <div className="flex items-center justify-center mb-4">
              <MdPets className="text-4xl text-green-700 mr-2" />
              <h3 className="text-3xl font-bold text-green-800">
                TodoMascotas
              </h3>
            </div>
            <p className="text-green-700">
              Cuidando a tus mascotas con amor y dedicación desde 2024.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center">
            <h4 className="text-xl font-semibold text-green-800 mb-4">
              Contáctanos
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-center">
                <MdLocationOn className="text-green-600 mr-2" />
                <span className="text-green-700">
                  Av San Miguel 3496, 4600000 Talca, Maule
                </span>
              </li>
              <li className="flex items-center justify-center">
                <MdPhone className="text-green-600 mr-2" />
                <span className="text-green-700">+56 2 2123 4567</span>
              </li>
              <li className="flex items-center justify-center">
                <MdEmail className="text-green-600 mr-2" />
                <span className="text-green-700">info@todomascotas.cl</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <h4 className="text-xl font-semibold text-green-800 mb-4">
              Síguenos
            </h4>
            <div className="flex justify-center space-x-4">
              {[
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/todo.mascotaschile/",
                },
                {
                  icon: FaFacebook,
                  href: "https://web.facebook.com/people/Todomascotas-CL/pfbid0aF8FsszfUtaze2fqrRsejzBpDtjH7g7qYT6eRshTNJj3oGfwgnHenSYbL6nc2Tm5l/",
                },
                {
                  icon: FaXTwitter,
                  href: "https://x.com/TodoMascotas_",
                },
                {
                  icon: FaGithubAlt,
                  href: "https://github.com/Paaanciitoo",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white shadow-lg h-12 w-12 flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
                  aria-label={`Visita nuestro perfil en ${social.icon.name}`}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-green-400 w-full">
          <p className="text-sm text-green-700 font-semibold">
            &copy; {new Date().getFullYear()} TodoMascotas, Inc. Todos los
            derechos reservados.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden rotate-180">
        <svg
          className="relative block w-full h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
